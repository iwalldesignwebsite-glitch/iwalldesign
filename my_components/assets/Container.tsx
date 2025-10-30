import React from "react";
import clsx from "clsx"; // opcjonalnie – do łączenia klas bez pustych stringów

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "container p-5 mx-auto flex flex-col md:p-10 lg:p-15 xl:p-20 content-[auto] [contain-intrinsic-size:1px_800px]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
