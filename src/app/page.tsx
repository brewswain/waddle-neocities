import { redirect } from "next/navigation";

import ButtonContainer from "@/components/HomePage/ButtonContainer";
import ChatBox from "@/components/HomePage/ChatBox";
import Preamble from "@/components/HomePage/Preamble";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  // redirect("/construction");
  return (
    <main className="flex-col items-center flex bg-slate-400 min-h-dvh bg-home-page bg-no-repeat bg-cover gap-4 pb-12 sm:grid sm:grid-rows-5 grid-cols-5">
      <Navbar rowStart={1} rowEnd={1} columnStart={3} columnEnd={5} />
      <Preamble rowStart={2} rowEnd={4} columnStart={3} columnEnd={5} />
      <ButtonContainer rowStart={2} rowEnd={4} columnStart={2} columnEnd={2} />
      {/* <ChatBox /> */}
      <Footer />
    </main>
  );
}
