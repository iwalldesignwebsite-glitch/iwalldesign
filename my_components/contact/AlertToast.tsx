"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X } from "lucide-react";

type Props = {
  status: "idle" | "success" | "error";
  onClose: () => void;
  duration?: number; 
};

export default function AlertToast({ status, onClose, duration = 4000 }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (status === "idle") return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [status, duration, onClose]);

  if (!mounted || status === "idle") return null;

  const isSuccess = status === "success";

  const content = (
    <div
      className={[
        "fixed z-[1000] w-[min(92vw,36rem)]",
        "left-1/2 -translate-x-1/2 bottom-4",
        "sm:right-6 sm:left-auto sm:translate-x-0 sm:bottom-6",
      ].join(" ")}
      role={isSuccess ? "status" : "alert"}
      aria-live="polite"
    >
      <Alert
        className={[
          "relative shadow-lg",
          isSuccess ? "border-green-600 text-green-700" : "border-red-600 text-red-700",
        ].join(" ")}
      >
        <button
          type="button"
          aria-label="Zamknij komunikat"
          onClick={onClose}
          className="absolute right-2 top-2 rounded p-1 hover:bg-black/5"
        >
          <X className="h-4 w-4" />
        </button>
        <AlertTitle>{isSuccess ? "Sukces 🎉" : "Błąd ❌"}</AlertTitle>
        <AlertDescription>
          {isSuccess ? "Wiadomość została wysłana poprawnie." : "Coś poszło nie tak. Spróbuj ponownie później."}
        </AlertDescription>
      </Alert>
    </div>
  );

  return createPortal(content, document.body);
}
