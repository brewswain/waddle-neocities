import {
  authorizeUser,
  getCurrentUser,
  getImplicitAuthorization,
  getTopTracks,
} from "@/app/music/api";
import { SpotifyContext } from "@/context/SpotifyContext";
import spotifyApi from "@/utils/spotify/spotify";
import { useContext, useEffect, useState } from "react";
// import fs from "fs/promises"; // Import Node.js filesystem module

const PlaylistGenerator = () => {
  const { authToken } = useContext(SpotifyContext);
  const [myTopTracks, setMyTopTracks] =
    useState<SpotifyApi.UsersTopTracksResponse>();

  const fetchData = async () => {
    try {
      const user = await getCurrentUser(authToken);

      if (user.id === "brewswain") {
        console.log("brewswain dfound");
        const response = await getTopTracks({
          access_token: authToken,
          limit: 10,
          write_to_file: true,
        });
        setMyTopTracks(response);
      } else {
        const response = await getTopTracks({
          access_token: authToken,
          limit: 5,
          write_to_file: false,
        });
        setMyTopTracks(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return authToken ? (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">These are your top 5 songs</h1>
      <ol className="flex flex-col">
        {myTopTracks?.items.map((track, index) => (
          <li key={crypto.randomUUID()}>{`${index + 1}. ${track.name}`}</li>
        ))}
      </ol>

      <h1 className="text-2xl font-bold">These are my top 10 songs</h1>
    </div>
  ) : (
    <button onClick={() => getImplicitAuthorization()}>login</button>
  );
};

export default PlaylistGenerator;
