"use client";

import { redirect } from "next/navigation";

import ButtonContainer from "@/components/HomePage/ButtonContainer";
import ChatBox from "@/components/HomePage/ChatBox";
import Preamble from "@/components/HomePage/Preamble";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import { useEffect, useState } from "react";
import { placeholderURL } from "./consts/largeText";

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    placeholderURL
  );

  // redirect("/construction");
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

    console.warn({
      preloadLog: preloadImage(imageSrc),
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    // bg-home-page
    <main
      className="flex-col items-center flex bg-slate-400 min-h-dvh
      bg-no-repeat bg-cover gap-4 pb-12 sm:grid sm:grid-rows-5 grid-cols-5"
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
