"use client";

import React from "react";

interface ConsoleCowBoyProps {
  children: JSX.Element;
}
const ConsoleCowBoy = ({ children }: ConsoleCowBoyProps) => {
  return (
    <article className=" prose flex flex-col bg-slate-100 p-4 lg:prose-xl sm:mt-4">
      {children}
    </article>
  );
};

export default ConsoleCowBoy;
