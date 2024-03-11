import { createClient } from "@/utils/supabase/client";

import CheckListItem from "@/components/ChecklistItem";
import FriendBadgeContainer from "@/components/FriendBadges/FriendBadgeContainer";

import backgroundImage from "../../../assets/64d4520749a58717c1f21a69_Pondering.svg";
import Navbar from "@/components/Navigation/Navbar";

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
      className="construction__checklist flex min-h-dvh flex-col items-center bg-pink-300"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "left",
        height: "100%",
      }}
    >
      <Navbar />

      <h3
        aria-label="announcement header"
        className="m-4 w-full max-w-[50ch] rounded  bg-slate-100 text-center text-xl "
      >
        Hey, site&apos;s still under construction so expect everything to be
        broken, but if you&apos;d like to see it take shape feel free to check
        back every now and then! 👷🏽
      </h3>

      <FriendBadgeContainer />

      <article className="border-1 max-w-dvw flex  flex-col items-center rounded border border-black bg-indigo-100 p-4 sm:max-w-[100ch]">
        <h1
          aria-label="checklist header"
          className=" pb-4 text-4xl font-medium"
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
