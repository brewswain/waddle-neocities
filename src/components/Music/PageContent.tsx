"use client";

import { usePalette } from "color-thief-react";
import ImageHeader from "./ImageHeader";
import MainPlaylist from "./MainPlaylist";
import TextSprawl from "./TextSprawl";
import { useContext, useEffect, useState } from "react";
import CloseIcon from "../atoms/icons/CloseIcon";
import PlaylistGenerator from "./PlaylistGenerator";
import { SpotifyContext } from "@/context/SpotifyContext";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import BlogPosts from "./BlogPosts";
import WaitlistModal from "./WaitlistModal";
import { getAlbumData } from "@/app/music/api";

interface PageContentProps {
  playlistData: SpotifyApi.SinglePlaylistResponse;
  localFileTopTracks: SpotifyApi.UsersTopTracksResponse;
}
const PageContent = ({
  playlistData,
  localFileTopTracks,
}: PageContentProps) => {
  const [showGenerator, setShowGenerator] = useState(false);
  const [currentUser, setCurrentUser] =
    useState<SpotifyApi.CurrentUsersProfileResponse>();
  const [hashParams, setHashParams] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState();

  const [blogposts, setBlogposts] = useState<SpotifyApi.SingleAlbumResponse[]>(
    [],
  );

  const router = useRouter();

  const { authToken, setAuthToken } = useContext(SpotifyContext);

  interface Params {
    [key: string]: string;
  }
  const params: Params = {};
  for (let i = 0; i < hashParams.length; i++) {
    const [key, value] = hashParams[i].split("=");
    params[key] = decodeURIComponent(value);
  }

  if (params.access_token && params.state) {
    setAuthToken(params.access_token);
  }

  const playlistId = playlistData.id;
  const imageUrl = playlistData.images[0].url;

  const { data, loading, error } = usePalette(imageUrl, 3, "hex", {
    crossOrigin: "anonymous",
  });

  const handleClick = () => {
    const isRegistered = localStorage.getItem("isRegistered");

    if (isRegistered) {
      router.push("https://spotify-profile-api.vercel.app/music");
    } else {
      setShowModal(true);
    }
  };

  const fetchAlbum = async () => {
    // 1aCdrqjxp4duqTRne80ecY - so the flies dont come id
    const response = await getAlbumData("1aCdrqjxp4duqTRne80ecY");

    if (response) {
      console.log(response);
      setBlogposts([response]);
    }
    return response;
  };

  useEffect(() => {
    const paramsState = window.location.hash.substr(1).split("&");
    setHashParams(paramsState);

    // Temporarily get album info
    fetchAlbum();
  }, []);

  return (
    <>
      {!loading && !error && data && (
        <section
          className="items-center-4 flex min-h-dvh w-full flex-col"
          style={{
            background: `linear-gradient(180deg, ${data[0]} 0%, rgba(0,0,0,1) 60%)`,
          }}
        >
          <article className="flex flex-col pt-28 lg:pl-[350px] 2xl:pl-0">
            <MainPlaylist playlistId={playlistId} />
            <ImageHeader playlistData={playlistData} />
            <TextSprawl />
          </article>
          <article className="flex flex-col items-center pt-10 md:pt-20 lg:pl-[350px] 2xl:pl-0">
            <span className="max-w-[75ch] px-4 text-center text-lg font-medium text-white opacity-70">
              Or maybe, you want to get recommended a playlist? I&apos;ll use my
              current top 10 songs as a seed, combined with your current top 5
              songs, and see what we get:
            </span>

            <button
              onClick={() => handleClick()}
              className="mt-4 w-[200px] rounded-3xl bg-[#21d760] p-2 text-center font-inter font-bold text-black"
            >
              Let&apos;s do it!
            </button>
          </article>

          {/* Re-enable when I actually have blogposts */}
          <BlogPosts blogData={blogposts} />

          {!isRegistered ? <WaitlistModal /> : null}
        </section>
      )}
    </>
  );
};

export default PageContent;
