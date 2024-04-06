import { createClient } from "@/utils/supabase/client";
import { getAlbumData } from "../../api";
import ReviewContent from "./ReviewContent";
import { redirect } from "next/navigation";

const ReviewPage = async ({ params }: { params: { album_id: string } }) => {
  const { album_id } = params;
  const albumData = await getAlbumData(album_id);

  if (albumData) {
    return (
      <main className="h-dvh bg-slate-500">
        <ReviewContent albumData={albumData} />;
      </main>
    );
  }

  redirect("/music");
};

export default ReviewPage;

export async function generateStaticParams() {
  const supabase = createClient();

  const { data: reviews } = await supabase.from("reviews").select("album_id");

  return reviews!.map((review) => ({
    album_id: review.album_id,
  }));
}
