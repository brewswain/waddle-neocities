"use client";

import PageTransition from "@/components/Transitions/PageTransition";
import { usePalette } from "color-thief-react";

interface ReviewContentProps {
  albumData: SpotifyApi.SingleAlbumResponse;
}

const ReviewContent = ({ albumData }: ReviewContentProps) => {
  const { data, loading, error } = usePalette(
    albumData?.images[0].url,
    3,
    "hex",
    {
      crossOrigin: "anonymous",
    },
  );

  return (
    <>
      {data && (
        <div
          className="flex min-h-dvh w-full flex-col pt-20 text-white"
          style={{
            background: `linear-gradient(180deg, ${data[0]} 0%, rgba(0,0,0,1) 60%)`,
          }}
        >
          <PageTransition>ReviewContent</PageTransition>
        </div>
      )}
    </>
  );
};

export default ReviewContent;
