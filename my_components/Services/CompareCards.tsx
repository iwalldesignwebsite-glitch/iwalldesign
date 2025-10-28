import { HoverEffect } from "@/components/ui/card-hover-effect";
import RevealOnScroll from "../assets/RevealWrapper";
import { ReactNode } from "react";

type Project = {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
  codeblock?: ReactNode;
};

type CompareCardsProps = {
  projects: Project[];
};

export function CompareCards({ projects }: CompareCardsProps) {
  return (
    <div className="  lg:py-0 lg:order-2">
      <RevealOnScroll>
        <HoverEffect items={projects} />
      </RevealOnScroll>
    </div>
  );
}
