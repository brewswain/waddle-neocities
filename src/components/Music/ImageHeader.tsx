import Image from "next/image";

interface ImageHeaderProps {
  playlistData: SpotifyApi.SinglePlaylistResponse;
}

const ImageHeader = ({ playlistData }: ImageHeaderProps) => {
  return (
    <div className="flex flex-col pb-4 md:flex-row">
      {/* <Image
        alt="Album artwork"
        src={playlistData.images[0].url}
        width={450}
        height={450}
        className="hidden md:block"
      /> */}
      <h1 className=" w-full pt-4 text-center text-4xl font-semibold text-white opacity-80 sm:mt-8 sm:pl-4 md:pb-4 md:text-6xl ">
        Welcome, traveller.
      </h1>
    </div>
  );
};

export default ImageHeader;
