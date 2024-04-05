import { Suspense } from "react";
import fs from "fs"; // Import Node.js filesystem module

import Image from "next/image";

import { getArtistData, getPlaylistData, getTopTracks } from "./api";

import TagsContainer from "@/components/Tags/TagsContainer";
import Auth from "@/components/Music/Auth";
import Navbar from "@/components/Navigation/Navbar";
import PlaylistTray from "@/components/Music/PlaylistTray";

import PageContent from "@/components/Music/PageContent";
import { createClient } from "@/utils/supabase/client";
// import { readTopTracks } from "@/utils/server-utils/server-utils";

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
  const supabase = createClient();

  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("slug");

  console.log(reviews);

  const artistData = await getArtistData("0ybFZ2Ab08V8hueghSXm6E");
  const playlistData = await getPlaylistData("69mxNa67RtcC4GOJ6GJlSW");

  const readTopTracks = async () => {
    return await fs.readFileSync("topTracks.json", "utf8");
  };

  const tracks = await readTopTracks();

  const parsedTracks: SpotifyApi.UsersTopTracksResponse = JSON.parse(tracks);

  return (
    <main className="flex h-full min-h-dvh w-full flex-col items-center  text-slate-400">
      <div className="absolute top-0 z-10 w-full sm:flex sm:self-center md:mt-[20px] lg:h-[60px] lg:w-[830px]">
        <Navbar includeVerticalView />
      </div>
      <PageContent
        playlistData={playlistData}
        localFileTopTracks={parsedTracks}
      />
    </main>
  );
};

export default MusicPage;
