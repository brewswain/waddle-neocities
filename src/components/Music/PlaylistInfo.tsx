"use client";

import Image from "next/image";

import Color, { usePalette } from "color-thief-react";
import ImageHeader from "./ImageHeader";

interface PlaylistInfoProps {
  playlistData: SpotifyApi.SinglePlaylistResponse;
}
const PlaylistInfo = ({ playlistData }: PlaylistInfoProps) => {
  const playlistId = playlistData.id;

  const imageUrl = playlistData.images[0].url;
  const { data, loading, error } = usePalette(imageUrl, 3, "hex", {
    crossOrigin: "anonymous",
  });

  return (
    <>
      {!loading && !error && data && (
        <section
          className={`flex h-dvh  w-full flex-col items-center pt-24`}
          style={{
            background: `linear-gradient(180deg, ${data[0]} 0%, rgba(0,0,0,1) 60%)`,
          }}
        >
          <article className="pt-4 sm:flex lg:pl-[350px]">
            <div className="flex h-full w-full justify-center">
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="300"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="left-5 top-28 h-60 w-full md:absolute md:h-[90%] md:w-[300px]"
              />
            </div>
            <ImageHeader playlistData={playlistData} />
          </article>
        </section>
      )}
    </>
  );
};

export default PlaylistInfo;
