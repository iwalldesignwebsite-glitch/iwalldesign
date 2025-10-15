import { cn } from "@/lib/utils";
import { Layers, Medal, Clock, Palette } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-200   block  rounded-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.5 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle id={idx}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
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
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-sm h-full w-full  overflow-hidden bg-white border-2   relative z-20",
        className
      )}
    >
      <div className="relative z-50 ">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
  id,
}: {
  id: number;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-gradient-to-tr from-blue-500 to-emerald-500 text-white p-2 rounded-sm">
        {id === 0 && <Layers />}
        {id === 1 && <Medal />}
        {id === 2 && <Palette />}
        {id === 3 && <Clock />}
      </div>
      <h4 className={cn("text-black/90 font-bold", className)}>{children}</h4>
    </div>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-2 text-black/70  text-sm", className)}>{children}</p>
  );
};

export const CardIcon = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
