import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="container p-5 mx-auto flex flex-col  md:p-10 lg:p-15 xl:p-20">
      {children}
    </div>
  );
}

export default Container;
