import {
  authorizeUser,
  getCurrentUser,
  getImplicitAuthorization,
  getTopTracks,
} from "@/app/music/api";
import { SpotifyContext } from "@/context/SpotifyContext";
import { readTopTracks } from "@/utils/server-utils/server-utils";
import spotifyApi from "@/utils/spotify/spotify";
import { useContext, useEffect, useState } from "react";
// import fs from "fs/promises"; // Import Node.js filesystem module

const PlaylistGenerator = () => {
  const { authToken } = useContext(SpotifyContext);
  const [myTopTracks, setMyTopTracks] =
    useState<SpotifyApi.UsersTopTracksResponse>();
  const [localFileTopTracks, setLocalFileTopTracks] =
    useState<SpotifyApi.UsersTopTracksResponse>();

  const fetchData = async () => {
    try {
      const user = await getCurrentUser(authToken);

      const tracks = await readTopTracks();

      const parsedTracks: SpotifyApi.UsersTopTracksResponse =
        JSON.parse(tracks);

      if (user.id === "brewswain") {
        const response = await getTopTracks({
          access_token: authToken,
          limit: 10,
          write_to_file: true,
        });
        setMyTopTracks(response);
        parsedTracks && setLocalFileTopTracks(parsedTracks);
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

  const getRecommendations = async () => {
    const myTrackIds = myTopTracks?.items.map((track) => track.id);
    const localFileTrackIds = localFileTopTracks?.items.map(
      (track) => track.id,
    );

    if (myTrackIds && localFileTrackIds) {
      const trackIds = myTrackIds?.concat(localFileTrackIds);
    }
  };

  getRecommendations();
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

      {localFileTopTracks ? (
        <>
          <h1 className="text-2xl font-bold">These are my top 10 songs</h1>
          <ol className="flex flex-col">
            {localFileTopTracks!.items.map((track, index) => (
              <li key={crypto.randomUUID()}>{`${index + 1}. ${track.name}`}</li>
            ))}
          </ol>
        </>
      ) : null}
    </div>
  ) : (
    <button onClick={() => getImplicitAuthorization()}>login</button>
  );
};

export default PlaylistGenerator;
