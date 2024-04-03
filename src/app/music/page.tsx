import { Suspense } from "react";

import Image from "next/image";

import { getArtistData, getPlaylistData } from "./api";

import TagsContainer from "@/components/Tags/TagsContainer";
import Auth from "@/components/Music/Auth";
import Navbar from "@/components/Navigation/Navbar";
import PlaylistTray from "@/components/Music/PlaylistTray";
import PlaylistInfo from "@/components/Music/PlaylistInfo";

const MusicPage = async () => {
  /*
    Ok so this one's gonna be crazy. I want to have a playlist builder, but that's the last feature for sure since i want to use rust for that.
    I need to consume spotify api probably, since i want some artist info etc. I want to get album artwork,  etc for each individual "review" That i'll do.
    However, on the main music page, i want a...personal analysis running. (One that shows the type of songs i've been listening to divided by genre, mood, geolocation etc.) 
    If possible it'd also be cool if a playlist gets generated based on my top 20 songs at build time.
  /* 
        For the individual posts, i want it to be pretty visually striking with a background and accent colour determined by the album artwork's colour. Some sort of color extraction'll be needed.
        Also i want to have reviewCards be pretty as hell, probably have the Album artwork be the hero image.
  */

  /*
   IDEA FOR GETTING DYNAMIC CONTENT TO BE RENDERED ON HOMEPAGE-- In dev, we pull the data on load, and then dump our responses to a JSON file, which we then read our data from. It has to be able to overwrite said JSON file 
   */

  const testArtist = await getArtistData("0ybFZ2Ab08V8hueghSXm6E");
  const playlistData = await getPlaylistData("69mxNa67RtcC4GOJ6GJlSW");

  return (
    <main className="flex w-full flex-col items-center bg-slate-800 text-slate-400">
      <div className="absolute top-0 z-10 w-screen overflow-auto sm:ml-4 sm:flex sm:h-[530px] sm:flex-col sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
        <Navbar includeVerticalView />
      </div>

      {/* spotify playlist */}

      {/* Make our own playlist UI, make it look like the primary one but allow for custom theming and also the ability to put stuff stick individually etc,  allowing the currently playing playlist to be the only sticky one */}

      {/* <PlaylistTray /> */}

      {/* <h1>API Test!</h1>
      <h2>Artist</h2>
      <p>{testArtist.name}</p> */}

      {/* <Suspense>
        <Auth />
      </Suspense> */}
      <PlaylistInfo playlistData={playlistData} />
      {/* <TagsContainer tags={testArtist.genres} /> */}
    </main>
  );
};

export default MusicPage;
