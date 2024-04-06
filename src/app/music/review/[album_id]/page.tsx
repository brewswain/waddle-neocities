import { createClient } from "@/utils/supabase/client";
import React from "react";
import { getAlbumData } from "../../api";

const ReviewPage = async ({ params }: { params: { album_id: string } }) => {
  const { album_id } = params;
  const albumData = await getAlbumData(album_id);

  const { artists, name, genres, tracks } = albumData;

  return <div>{album_id}</div>;
};

export default ReviewPage;

export async function generateStaticParams() {
  const supabase = createClient();

  const { data: reviews } = await supabase.from("reviews").select("album_id");

  return reviews!.map((review) => ({
    album_id: review.album_id,
  }));
}
