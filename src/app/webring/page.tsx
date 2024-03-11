import Navbar from "@/components/Navigation/Navbar";

const WebRingPage = () => {
  return (
    <main className="flex flex-col items-center pt-10">
        <div className="sticky top-0 z-10 overflow-auto sm:ml-4 sm:flex sm:h-[530px] sm:flex-col sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
          <Navbar includeVerticalView />
        </div>
      <div className="text-4xl font-semibold my-8 font-merriweather">hi</div>
    </main>
  );
};

export default WebRingPage;
