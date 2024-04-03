"use client";

import { usePalette } from "color-thief-react";
import ImageHeader from "./ImageHeader";
import MainPlaylist from "./MainPlaylist";
import TextSprawl from "./TextSprawl";
import { useEffect, useState } from "react";
import CloseIcon from "../atoms/icons/CloseIcon";
import PlaylistGenerator from "./PlaylistGenerator";
import { getCurrentUser } from "@/app/music/api";

interface PageContentProps {
  playlistData: SpotifyApi.SinglePlaylistResponse;
}
const PageContent = ({ playlistData }: PageContentProps) => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [currentUser, setCurrentUser] =
    useState<SpotifyApi.CurrentUsersProfileResponse>();

  const playlistId = playlistData.id;

  const imageUrl = playlistData.images[0].url;
  const { data, loading, error } = usePalette(imageUrl, 3, "hex", {
    crossOrigin: "anonymous",
  });

  const fetchData = async () => {
    const response = await getCurrentUser();

    response && setCurrentUser(response.body);
  };

  useEffect(() => {
    if (showGenerator) {
      fetchData();
    }
  });

  return (
    <>
      {!loading && !error && data && (
        <section
          className="items-center-4 flex min-h-dvh w-full flex-col"
          style={{
            background: `linear-gradient(180deg, ${data[0]} 0%, rgba(0,0,0,1) 60%)`,
          }}
        >
          {!showGenerator ? (
            <>
              <article className="flex flex-col pt-28 lg:pl-[350px]">
                <MainPlaylist playlistId={playlistId} />
                <ImageHeader playlistData={playlistData} />
                <TextSprawl />
              </article>
              <article className="flex flex-col items-center pt-10">
                <>
                  <span className="px-4 text-center">
                    Or maybe, you want to get recommended a playlist? I&apos;ll
                    use my current top 10 songs as a seed, combined with your
                    current top 5 songs, and see what we get:
                  </span>
                  <button
                    className="mt-4 w-[200px] rounded-3xl bg-[#21d760] p-2 font-bold text-black"
                    onClick={() => setShowGenerator(true)}
                  >
                    Let&apos;s do it!
                  </button>
                </>
              </article>
            </>
          ) : (
            <article className="flex flex-col items-center pt-28">
              <div
                className="absolute right-8 top-28 cursor-pointer"
                onClick={() => setShowGenerator(false)}
              >
                <CloseIcon />
              </div>
              <PlaylistGenerator user={currentUser} />
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default PageContent;
