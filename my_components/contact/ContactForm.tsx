"use client";

import { useMemo, useState, useEffect } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, X } from "lucide-react";
import Link from "next/link";

/* ------------------------- Walidacja (Zod) ------------------------- */

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ALLOWED_TYPES = new Set<string>([
  "image/jpeg",
  "image/png",
  "application/pdf",
]);

const schema = z.object({
  name: z.string().trim().min(2, "Podaj imię i nazwisko"),
  email: z.string().trim().email({ message: "Podaj poprawny adres e-mail" }),
  phone: z
    .string()
    .transform((v) => v.replace(/[^\d]/g, ""))
    .refine((v) => /^\d{9}$/.test(v), {
      message: "Numer telefonu musi mieć 9 cyfr",
    }),
  city: z.string().trim().min(2, "Podaj miasto"),
  files: z
    .array(z.instanceof(File))
    .max(3, "Dodaj maksymalnie 3 pliki")
    .refine((arr) => arr.every((f) => ALLOWED_TYPES.has(f.type)), {
      message: "Dozwolone formaty: JPG, PNG, PDF",
    })
    .refine((arr) => arr.every((f) => f.size <= MAX_FILE_SIZE), {
      message: "Każdy plik max 2 MB",
    })
    .default([]),
  message: z.string().trim().min(5, "Wiadomość jest wymagana (min. 5 znaków)"),
  privacy: z.boolean().refine((v) => v === true, {
    message: "Musisz zaakceptować politykę prywatności",
  }),
  website: z.string().optional().default(""),
});

type FormData = z.output<typeof schema>;
type SubmitResult = "success" | "error";
type Props = { onSubmitResult?: (r: SubmitResult) => void };

/* ----------------------------- Komponent ----------------------------- */

export default function ContactForm({ onSubmitResult }: Props) {
  const [isOver, setIsOver] = useState(false);
  const [liveMsg, setLiveMsg] = useState("");

  const resolver = zodResolver(schema) as unknown as Resolver<FormData>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
    setError,
    clearErrors,
    getValues,
    setFocus,
  } = useForm<FormData>({
    resolver,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
      privacy: false,
      files: [],
      website: "",
    },
  });

  const files = watch("files");

  /* ---------- dodawanie/usuwanie plików (input + drag&drop) ---------- */

  const mergeAndSetFiles = (incoming: File[]) => {
    const current = getValues("files") ?? [];
    const merged = [...current, ...incoming];

    // unikalność
    const unique = merged.filter(
      (f, i, arr) =>
        i ===
        arr.findIndex(
          (x) => x.name === f.name && x.size === f.size && x.type === f.type
        )
    );

    if (unique.length > 3)
      setError("files", { message: "Maksymalnie 3 pliki" });
    else clearErrors("files");

    setValue("files", unique.slice(0, 3), { shouldValidate: true });
    setLiveMsg(`Dodano ${incoming.length} plik(i).`);
  };

  const onAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    if (!selected.length) return;
    mergeAndSetFiles(selected);
    e.currentTarget.value = "";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    const dropped = Array.from(e.dataTransfer.files ?? []);
    if (dropped.length) mergeAndSetFiles(dropped);
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsOver(false);
  };

  const removeFile = (idx: number) => {
    const next = files.filter((_, i) => i !== idx);
    setValue("files", next, { shouldValidate: true });
    setLiveMsg(`Usunięto plik ${idx + 1}.`);
  };

  /* ----------------------------- submit ------------------------------ */

  const fullReset = () => {
    reset();
    setIsOver(false);
    setLiveMsg("");
    setFocus("name");
  };

  const onSubmit = async (data: FormData) => {
    try {
      // honeypot
      if (data.website && data.website.trim() !== "") {
        onSubmitResult?.("success");
        fullReset();
        return;
      }

      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("phone", data.phone);
      fd.append("city", data.city);
      fd.append("message", data.message);
      data.files.forEach((file) => fd.append("files", file));

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Błąd serwera");

      onSubmitResult?.("success");
      fullReset();
      setLiveMsg("Wiadomość wysłana.");
    } catch (e) {
      console.error(e);
      onSubmitResult?.("error");
      setLiveMsg("Błąd wysyłki.");
    }
  };

  /* ---------------------- Miniatury obrazków ---------------------- */
  const previews = useMemo(
    () =>
      files.map((f) =>
        f.type.startsWith("image/") ? URL.createObjectURL(f) : null
      ),
    [files]
  );

  useEffect(() => {
    return () => {
      previews.forEach((u) => u && URL.revokeObjectURL(u));
    };
  }, [previews]);

  const prettySize = (n: number) => {
    if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
    if (n >= 1024) return `${(n / 1024).toFixed(0)} KB`;
    return `${n} B`;
  };

  /* ------ Blokada nie-cyfr w telefonie ------ */
  const allowOnlyDigits = (e: React.FormEvent<HTMLInputElement>) => {
    // @ts-ignore nativeEvent.data dla beforeinput
    const data: string | null = e.nativeEvent?.data ?? null;
    if (data && /\D/.test(data)) e.preventDefault();
  };
  const onPhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const digits = e.clipboardData.getData("text").replace(/[^\d]/g, "");
    const target = e.currentTarget;
    const start = target.selectionStart ?? target.value.length;
    const end = target.selectionEnd ?? start;
    const next =
      target.value.slice(0, start) + digits + target.value.slice(end);
    target.value = next;
    target.dispatchEvent(new Event("input", { bubbles: true }));
  };
  const onPhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ctrl = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "Tab",
    ];
    if (ctrl.includes(e.key)) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  /* ------ Zczytywanie projektu z wizualizatora------ */

  useEffect(() => {
    const saved = localStorage.getItem("visualizerProject");
    if (!saved) return;
    fetch(saved)
      .then((r) => r.blob())
      .then((blob) => {
        const file = new File([blob], "projekt.png", { type: "image/png" });
        setValue("files", [file], { shouldValidate: true });
        localStorage.removeItem("visualizerProject");
      })
      .catch(() => {
        localStorage.removeItem("visualizerProject");
      });
  }, [setValue]);

  return (
    <div className="max-w-2xl mx-auto">
      <p className="sr-only" aria-live="polite">
        {liveMsg}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Imię + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Imię i nazwisko*
            </label>
            <input
              id="name"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Jan Kowalski"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p id="err-name" className="text-sm text-red-600 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              E-mail*
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="jan@przyklad.pl"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p id="err-email" className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Telefon + Miasto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Numer telefonu*
            </label>
            <input
              id="phone"
              inputMode="numeric"
              pattern="[0-9]*"
              {...register("phone")}
              onBeforeInput={allowOnlyDigits as any}
              onKeyDown={onPhoneKeyDown}
              onPaste={onPhonePaste}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "err-phone" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="np. 500600700"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p id="err-phone" className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium">
              Miasto*
            </label>
            <input
              id="city"
              {...register("city")}
              aria-invalid={!!errors.city}
              aria-describedby={errors.city ? "err-city" : undefined}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Koszalin"
              disabled={isSubmitting}
            />
            {errors.city && (
              <p id="err-city" className="text-sm text-red-600 mt-1">
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        {/* Dropzone + lista + miniatury */}
        <div>
          <label className="block text-sm font-medium">
            Dodaj zdjęcia powierzchni lub projektu (opcjonalnie, max 3)
          </label>

          <div
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={() => setIsOver(true)}
            onDragLeave={onDragLeave}
            className={[
              "mt-2 grid place-items-center rounded-lg border border-dashed px-4 py-6 text-sm",
              isOver
                ? "bg-teal-50 border-teal-400"
                : "bg-white border-gray-300",
              errors.files ? "ring-1 ring-red-500" : "",
            ].join(" ")}
          >
            <p className="text-center">
              Przeciągnij i upuść pliki tutaj
              <span className="text-gray-500"> lub </span>
              <label htmlFor="files-input" className="underline cursor-pointer">
                wybierz z dysku
              </label>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {files.length}/3 pliki, max 2&nbsp;MB każdy
            </p>

            <input
              id="files-input"
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={onAddFiles}
              className="hidden"
              disabled={isSubmitting}
            />
          </div>

          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${f.size}-${i}`}
                  className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2 text-sm"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {f.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(f)}
                        onLoad={(e) =>
                          URL.revokeObjectURL(
                            (e.target as HTMLImageElement).src
                          )
                        }
                        alt={f.name}
                        className="h-10 w-10 rounded-md object-cover ring-1 ring-gray-200"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-md bg-gray-100 grid place-items-center text-[10px] font-semibold text-gray-600 ring-1 ring-gray-200">
                        PDF
                      </div>
                    )}
                    <div className="truncate">
                      <span className="font-medium truncate block max-w-[220px]">
                        {f.name}
                      </span>
                      <span className="text-gray-500">
                        {prettySize(f.size)}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Usuń plik ${f.name}`}
                    onClick={() => removeFile(i)}
                    className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50"
                    disabled={isSubmitting}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {errors.files && (
            <p id="err-files" className="text-sm text-red-600 mt-2">
              {errors.files.message as string}
            </p>
          )}
        </div>

        {/* Wiadomość (wymagana) */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Wiadomość*
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Opisz szczegóły…"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Honeypot (anty-spam) */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
          className="hidden"
          aria-hidden="true"
        />

        {/* Checkbox */}
        <div className="flex items-start gap-2">
          <input
            id="privacy"
            type="checkbox"
            {...register("privacy")}
            disabled={isSubmitting}
            className="mt-0.5"
          />

          <label htmlFor="privacy" className="text-sm text-gray-700">
            Zapoznałem(am) się i akceptuję{" "}
            <Link
              href="/polityka-prywatnosci"
              className="text-emerald-600 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Politykę Prywatności
            </Link>
            .
          </label>
        </div>

        {errors.privacy && (
          <p className="text-sm text-red-600 mt-1">{errors.privacy.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
        >
          {isSubmitting ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  opacity=".25"
                />
                <path d="M22 12a10 10 0 0 1-10 10" fill="currentColor" />
              </svg>
              Wysyłanie…
            </>
          ) : (
            <>
              <Send size={18} />
              Wyślij zapytanie
            </>
          )}
        </button>
      </form>
    </div>
  );
}
