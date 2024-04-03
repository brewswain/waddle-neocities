"use client";

import React, { Dispatch, SetStateAction } from "react";

interface SpotifyEmbedPlaylistProps {
  url: string;
  height?: string;
  width?: string;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
}

const SpotifyEmbedPlaylist = ({
  url,
  height = "352",
  width = "100%",
  isSelected,
  setIsSelected,
}: SpotifyEmbedPlaylistProps) => {
  const handleSelection = () => {
    setIsSelected(true);
  };
  return (
    <article onClick={() => handleSelection()}>
      <iframe
        src={url}
        width={width}
        height={height}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </article>
  );
};

export default SpotifyEmbedPlaylist;
