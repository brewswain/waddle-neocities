import { redirect } from "next/navigation";

import ButtonContainer from "@/components/HomePage/ButtonContainer";
import ChatBox from "@/components/HomePage/ChatBox";
import Preamble from "@/components/HomePage/Preamble";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";

export default function Home() {
  redirect("/construction");
  return (
    <main className=" flex-col items-center flex bg-slate-400 min-h-[100vh] bg-home-page bg-no-repeat bg-cover gap-4">
      <Navbar />
      <Preamble />
      <ButtonContainer />
      <ChatBox />
      <Footer />
    </main>
  );
}
