interface MainPlaylistProps {
  playlistId: string;
}

const MainPlaylist = ({ playlistId }: MainPlaylistProps) => {
  return (
    <div className="flex h-full w-full justify-center text-white">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="300"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="left-5 top-28 h-40 w-full md:absolute md:h-[90%] md:w-[300px]"
      />
    </div>
  );
};

export default MainPlaylist;
