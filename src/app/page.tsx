"use client";

import ButtonContainer from "@/components/HomePage/ButtonContainer";
import ChatBox from "@/components/HomePage/ChatBox";
import Preamble from "@/components/HomePage/Preamble";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import { useEffect, useState } from "react";
import { placeholderURL } from "./consts/largeText";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    placeholderURL,
  );

  useEffect(() => {
    const preloadImage = async (src: string) => {
      try {
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            setBackgroundImage(src); // Set the background image once it's loaded
            resolve();
          };
          img.onerror = reject;
          img.src = src;
        });
      } catch (error) {
        console.error(`Error preloading image: ${src}`, error);
      }
    };

    const imageSrc = "/images/kirby_1080_edit_compressed.png";

    preloadImage(imageSrc);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <main
      className="flex min-h-dvh justify-center gap-4 bg-slate-400 bg-cover bg-no-repeat backdrop:min-h-dvh "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <section className="flex flex-col bg-no-repeat sm:flex-row sm:gap-4 sm:pl-8 md:justify-between md:pt-10 lg:flex-col lg:justify-start lg:gap-10">
        <div className="lg: sticky top-0 overflow-auto sm:ml-4 sm:flex sm:h-[530px] sm:flex-col sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
          <Navbar />
        </div>
        <div className="lg: gap-4 sm:flex sm:flex-col sm:self-center lg:flex-row-reverse">
          <Preamble />
          <ButtonContainer />
        </div>
        <ChatBox />
        {/* <Footer /> */}
      </section>
    </main>
  );
}
