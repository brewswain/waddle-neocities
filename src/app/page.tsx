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
      className="flex min-h-dvh flex-col items-center gap-4 bg-slate-400 bg-cover bg-no-repeat pb-12 sm:grid sm:grid-cols-5 sm:grid-rows-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Navbar />
      <Preamble />
      <ButtonContainer />
      {/* <ChatBox /> */}
      <Footer />
    </main>
  );
}
