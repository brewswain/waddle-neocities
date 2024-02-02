import React from "react";

interface ConsoleCowBoyProps {
  children: JSX.Element;
}
const ConsoleCowBoy = ({ children }: ConsoleCowBoyProps) => {
  return (
    <div>
      <article className="prose flex flex-col bg-slate-100 p-4 mt-4 min-h-[100dvh] lg:prose-xl">
        {children}
      </article>
    </div>
  );
};

export default ConsoleCowBoy;
