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
      <Navbar />
      <Preamble />
      <ButtonContainer />
      {/* <ChatBox /> */}
      <Footer />
    </main>
  );
}
