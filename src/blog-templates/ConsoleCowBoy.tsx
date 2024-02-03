import React from "react";

interface ConsoleCowBoyProps {
  children: JSX.Element;
}
const ConsoleCowBoy = ({ children }: ConsoleCowBoyProps) => {
  return (
    <div>
      <article className="prose flex flex-col bg-slate-100 mt-4 p-4 lg:prose-xl">
        {children}
      </article>
    </div>
  );
};

export default ConsoleCowBoy;
