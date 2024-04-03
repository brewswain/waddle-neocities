import Image from "next/image";

interface ImageHeaderProps {
  playlistData: SpotifyApi.SinglePlaylistResponse;
}

const ImageHeader = ({ playlistData }: ImageHeaderProps) => {
  return (
    <>
      <Image
        alt="Album artwork"
        src={playlistData.images[0].url}
        width={450}
        height={450}
      />
      <h1 className="pl-4 text-9xl font-semibold text-white opacity-80">
        {playlistData.name}
      </h1>
    </>
  );
};

export default ImageHeader;
