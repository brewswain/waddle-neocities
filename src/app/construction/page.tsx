import Link from "next/link";

import { createClient } from "@/utils/supabase/client";

import CheckListItem from "@/components/ChecklistItem";
import FriendBadgeContainer from "@/components/FriendBadges/FriendBadgeContainer";
import MyFriendBadge from "@/components/FriendBadges/MyFriendBadge";

import backgroundImage from "../../../assets/64d4520749a58717c1f21a69_Pondering.svg";

export const revalidate = 60;
const ConstructionPage = async () => {
  const supabase = createClient();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("id,task, checked");

  const sortedTasks = tasks?.sort((a, b) => {
    return a.checked === b.checked ? -1 : a ? 0 : 1;
  });

  return (
    <main
      className="construction__checklist flex flex-col min-h-dvh items-center bg-pink-300"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left",
        height: "100%",
      }}
    >
      <h3
        aria-label="announcement header"
        className="w-full text-center m-4 text-xl  bg-slate-100 max-w-[50ch] rounded "
      >
        Hey, site&apos;s still under construction so expect everything to be
        broken, but if you&apos;d like to see it take shape feel free to check
        back every now and then! 👷🏽
      </h3>

      <Link
        href="/dev-blog"
        className="text-2xl bg-slate-50 p-2 rounded  hover:bg-blue-200 "
      >
        I made the framework for starting a tiny dev blog! still not responsive
        or anything yet though 😔😔
      </Link>

      <MyFriendBadge />
      <FriendBadgeContainer />

      <article className="border border-black border-1  flex flex-col items-center w-1/2 rounded bg-indigo-100 max-w-[100ch] p-4">
        <h1
          aria-label="checklist header"
          className=" font-medium text-4xl pb-4"
        >
          Basic framework needs:
        </h1>
        <ul aria-label="checklist">
          {sortedTasks
            ? sortedTasks.map((item, index) => (
                <CheckListItem
                  key={crypto.randomUUID()}
                  index={index}
                  checked={item.checked}
                  itemId={item.id}
                >
                  {item.task}
                </CheckListItem>
              ))
            : null}
        </ul>
      </article>
    </main>
  );
};

export default ConstructionPage;
