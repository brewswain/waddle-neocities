"use client";

import { useState } from "react";

import SpotifyEmbedPlaylist from "./SpotifyEmbedPlaylist";

const PlaylistTray = () => {
  const [isSelected, setIsSelected] = useState(false);

  const playlistURLs: string[] = [
    "https://open.spotify.com/embed/playlist/69mxNa67RtcC4GOJ6GJlSW?utm_source=generator",
    "https://open.spotify.com/embed/playlist/7DVYLOejZwspfPMbd1M7hG?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/playlist/47YG07BqsqnVFfjxRC9VV9?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0rBSXb9wIEAnEjXJer1ZN5?utm_source=generator",
  ];

  return (
    <section className="top-10 flex flex-wrap justify-center gap-4 py-10 sm:sticky sm:flex-nowrap">
      {playlistURLs.map((playlistURL) => (
        <SpotifyEmbedPlaylist
          url={playlistURL}
          key={crypto.randomUUID()}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      ))}
    </section>
  );
};

export default PlaylistTray;
