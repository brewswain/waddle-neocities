'use client';

import { useState } from 'react';

export default function Home() {
   const [count, setCount] = useState<number>(0);
   return (
      <main className=" flex-col items-center flex bg-slate-400 min-h-[100vh]">
         <span>hewwo :3</span>

         <div className="button__container flex gap-10">
            <button
               className=" bg-white border max-w-[250px] text-black"
               onClick={() => setCount(count + 1)}
            >
               Add 1
            </button>
            <button
               className=" bg-white border max-w-[250px] text-black"
               onClick={() => setCount(0)}
            >
               Clear
            </button>
         </div>
         <div>
            {count === 1 ? (
               <article>Button pressed {count} time</article>
            ) : (
               <article>Button pressed {count} times</article>
            )}
         </div>
      </main>
   );
}
