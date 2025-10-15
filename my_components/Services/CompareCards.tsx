import { HoverEffect } from "@/components/ui/card-hover-effect";
import RevealOnScroll from "../assets/RevealWrapper";
import { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  icon: ReactNode; // opcjonalnie – nie każdy projekt musi mieć obrazek
};

type CompareCardsProps = {
  projects: Project[];
};

export function CompareCards({ projects }: CompareCardsProps) {
  return (
    <div className="max-w-5xl  lg:py-0">
      <RevealOnScroll>
        <HoverEffect items={projects} />
      </RevealOnScroll>
    </div>
  );
}
