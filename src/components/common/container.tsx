import * as React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
  return <div className="max-w-6xl mx-auto px-6">{children}</div>;
}

export default Container;
