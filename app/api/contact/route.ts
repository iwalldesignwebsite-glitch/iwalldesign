// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// limity i typy plików
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB / plik
const ALLOWED_TYPES = new Set<string>([
  "image/jpeg",
  "image/png",
  "application/pdf",
]);

// utilsy
const trim = (s: string | null | undefined) => (s ?? "").toString().trim();
const digits = (s: string) => s.replace(/[^\d]/g, "");
const escapeHtml = (s: string) =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = trim(form.get("name") as string);
    const email = trim(form.get("email") as string);
    const phoneRaw = trim(form.get("phone") as string);
    const phone = digits(phoneRaw); // 9 cyfr
    const city = trim(form.get("city") as string);
    const message = trim((form.get("message") as string) || "");
    const files = form.getAll("files") as File[];

    // --- WALIDACJA ---
    if (!name || !email.includes("@")) {
      return NextResponse.json(
        { error: "Błędne imię lub e-mail." },
        { status: 400 }
      );
    }
    if (phone.length !== 9) {
      return NextResponse.json(
        { error: "Telefon musi mieć 9 cyfr." },
        { status: 400 }
      );
    }
    if (!city) {
      return NextResponse.json({ error: "Podaj miasto." }, { status: 400 });
    }

    // pliki są OPCJONALNE: 0–3
    if (files.length > 3) {
      return NextResponse.json(
        { error: "Dodaj maksymalnie 3 pliki." },
        { status: 400 }
      );
    }
    for (const f of files) {
      if (!ALLOWED_TYPES.has(f.type)) {
        return NextResponse.json(
          { error: "Dozwolone: JPG, PNG, PDF." },
          { status: 400 }
        );
      }
      if (f.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Każdy plik max 2 MB." },
          { status: 400 }
        );
      }
    }

    // załączniki tylko jeśli są pliki
    let attachments: { filename: string; content: Buffer }[] | undefined;
    if (files.length > 0) {
      attachments = await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          content: Buffer.from(await file.arrayBuffer()),
        }))
      );
    }

    // konfiguracja maila
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey || !to) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { error: "Brak konfiguracji maila." },
        { status: 500 }
      );
    }

    // inicjalizacja dopiero tutaj
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
        <h2 style="margin:0 0 6px 0">Nowe zapytanie z formularza</h2>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phoneRaw)}</p>
        <p><strong>Miasto:</strong> ${escapeHtml(city)}</p>
        <hr style="margin:12px 0;border:none;border-top:1px solid #eee" />
        <p><strong>Wiadomość:</strong></p>
        <pre style="white-space:pre-wrap;margin:0">${escapeHtml(
          message || "(brak)"
        )}</pre>
      </div>
    `;

    const text = `Nowe zapytanie z formularza
Imię i nazwisko: ${name}
E-mail: ${email}
Telefon: ${phoneRaw}
Miasto: ${city}

Wiadomość:
${message || "(brak)"}
`;

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[iWallDesign] Zapytanie od ${name}`,
      html,
      text,
      ...(attachments ? { attachments } : {}),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Błąd wysyłki." }, { status: 500 });
  }
}
