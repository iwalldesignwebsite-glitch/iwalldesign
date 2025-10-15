import React from "react";
type Props = {
  children: React.ReactNode;
  titleId: string;
  lead: string;
  description: string;
};
function Title({ children, titleId, lead, description }: Props) {
  return (
    <header className="w-full">
      <h2 id={titleId} className="text-3xl font-semibold lg:text-4xl">
        {children}
      </h2>
      <p id={lead} className="text-black/70 mt-5 xl:text-xl">
        {description}
      </p>
    </header>
  );
}

export default Title;
