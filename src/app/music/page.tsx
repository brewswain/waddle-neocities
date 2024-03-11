import TagsContainer from "@/components/Tags/TagsContainer";
import Image from "next/image";
import { getArtistData } from "./api";
import Auth from "@/components/Music/Auth";

const MusicPage = async () => {
  /*
    Ok so this one's gonna be crazy. I want to have a playlist builder, but that's the last feature for sure since i want to use rust for that.
    
    I need to consume spotify api probably, since i want some artist info etc. I want to get album artwork,  etc for each individual "review" That i'll do.

    However, on the main music page, i want a...personal analysis running. (One that shows the type of songs i've been listening to divided by genre, mood, geolocation etc.) 

    If possible it'd also be cool if a playlist gets generated based on my top 20 songs at build time.
    */

  /* 
        For the individual posts, i want it to be pretty visually striking with a background and accent colour determined by the album artwork's colour. Some sort of color extraction'll be needed.

        Aldo i want to have reviewCards be pretty as hell, probably have the Album artwork be the hero image.
    */

  const testArtist = await getArtistData("0ybFZ2Ab08V8hueghSXm6E");

  return (
    <main className="flex flex-col items-center md:pt-10">
      <h1>API Test!</h1>
      <h2>Artist</h2>
      <p>{testArtist.name}</p>
      <h2>Album artwork</h2>
      <Image
        alt="Album artwork"
        src={testArtist.images[0].url}
        width={640}
        height={640}
      />
      <Auth />
      <TagsContainer tags={testArtist.genres} />
    </main>
  );
};

export default MusicPage;
