import FriendBadgeContainer from "@/components/FriendBadges/FriendBadgeContainer";
import MyFriendBadge from "@/components/FriendBadges/MyFriendBadge";
import Navbar from "@/components/Navigation/Navbar";

const WebRingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-200 md:pt-10">
      <div className="absolute top-0 z-10 w-screen sm:flex sm:self-center md:ml-4 md:mt-[20px] lg:h-[60px] lg:w-[830px]">
        <Navbar includeVerticalView />
      </div>
      <h1 className="my-8 mt-10 font-merriweather text-4xl font-semibold">
        Waddle Squad
      </h1>
      <article className="flex flex-wrap justify-center rounded bg-white lg:min-w-[600px]">
        <FriendBadgeContainer />
      </article>

      <h2 className=" mb-6 mt-12 font-merriweather text-3xl font-semibold">
        My Button!
      </h2>
      <article className="flex flex-wrap justify-center rounded bg-white">
        <MyFriendBadge />
      </article>
    </main>
  );
};

export default WebRingPage;
