import FriendBadgeContainer from "@/components/FriendBadges/FriendBadgeContainer";
import MyFriendBadge from "@/components/FriendBadges/MyFriendBadge";
import Navbar from "@/components/Navigation/Navbar";

const WebRingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-cyan-200 pt-10">
      <article className="sticky top-0 z-10 overflow-auto sm:ml-4 sm:flex sm:h-[530px] sm:flex-col sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
        <Navbar includeVerticalView />
      </article>
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
