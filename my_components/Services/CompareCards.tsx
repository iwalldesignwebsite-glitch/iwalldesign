import { HoverEffect } from "@/components/ui/card-hover-effect";
import RevealOnScroll from "../assets/RevealWrapper";

type Project = {
  title: string;
  description: string;
  image?: string; // opcjonalnie – nie każdy projekt musi mieć obrazek
};

type CompareCardsProps = {
  projects: Project[];
}

export function CompareCards({projects}: CompareCardsProps) {
  return (
    <div className="max-w-5xl py-10 lg:py-0">
      <RevealOnScroll>
        <HoverEffect items={projects} />
      </RevealOnScroll>
    </div>
  );
}
