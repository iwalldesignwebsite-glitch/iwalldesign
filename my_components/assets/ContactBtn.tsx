import { Send } from "lucide-react";

interface ContactBtnProps {
  variant?: "solid" | "outline";
  label?: string;
}

const ContactBtn = ({
  variant = "outline",
  label = "Napisz wiadomość!",
}: ContactBtnProps) => {
  const baseStyles =
    "group inline-flex items-center gap-2 font-medium rounded-md transition-all duration-300 ease-out";

  const variants = {
    outline:
      "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500/10 hover:shadow-lg px-4 py-2",
    solid: "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg px-4 py-2",
  };

  return (
    <a href="#kontakt" className={`${baseStyles} ${variants[variant]}`}>
      {label}
      <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
};

export default ContactBtn;
