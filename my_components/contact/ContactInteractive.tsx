"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import AlertToast from "./AlertToast";
export default function ContactInteractive() {
  const [toast, setToast] = useState<"idle" | "success" | "error">("idle");

  return (
    <div>
      <ContactForm onSubmitResult={(s) => setToast(s)} />
      <div aria-live="polite" aria-atomic="true">
        <AlertToast status={toast} onClose={() => setToast("idle")} />
      </div>
    </div>
  );
}
