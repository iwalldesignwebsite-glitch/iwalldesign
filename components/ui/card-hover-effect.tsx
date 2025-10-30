"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type HoverItem = {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
  codeblock?: ReactNode;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-200 block rounded-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.1 } }}
                exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.5 } }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
            <CardDescription codeblock={item.codeblock}>
              {item.description}
            </CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-sm h-full w-full overflow-hidden bg-white border-2 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  icon,
}: {
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div className="flex gap-2 items-center">
      {icon && (
        <div className="bg-gradient-to-tr from-blue-500 to-emerald-500 text-white p-2 rounded-sm flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className={cn("text-black/90 font-bold", className)}>{children}</h3>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
  codeblock,
}: {
  className?: string;
  children: ReactNode;
  codeblock?: ReactNode;
}) => {
  return (
    <div className={cn("mt-2 text-black/70 text-sm space-y-2", className)}>
      <p>{children}</p>
      {codeblock && (
        <div className="border-t border-emerald-100 pt-2">{codeblock}</div>
      )}
    </div>
  );
};
