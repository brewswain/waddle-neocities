import {
  authorizeUser,
  createPlaylist,
  getCurrentUser,
  getImplicitAuthorization,
  getRecommendations,
  getTopTracks,
} from "@/app/music/api";
import { SpotifyContext } from "@/context/SpotifyContext";
import spotifyApi from "@/utils/spotify/spotify";
import { useContext, useEffect, useState } from "react";
// import fs from "fs/promises"; // Import Node.js filesystem module

interface PlaylistGeneratorProps {
  localFileTopTracks: SpotifyApi.UsersTopTracksResponse;
}

const PlaylistGenerator = ({ localFileTopTracks }: PlaylistGeneratorProps) => {
  const { authToken } = useContext(SpotifyContext);
  const [myTopTracks, setMyTopTracks] =
    useState<SpotifyApi.UsersTopTracksResponse>();

  const fetchData = async () => {
    try {
      const user = await getCurrentUser(authToken);

      if (user.id === "brewswain") {
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

  const generatePlaylist = async () => {
    const myTrackIds = myTopTracks?.items.map((track) => track.id);
    const localFileTrackIds = localFileTopTracks?.items.map(
      (track) => track.id,
    );

    if (myTrackIds && localFileTrackIds) {
      //   const trackIds = myTrackIds?.concat(localFileTrackIds);
      const trackIds = myTrackIds.slice(0, 5); // limit of 5 which sucks
      const localTrackIds = localFileTrackIds.slice(0, 5);

      const useRecommendationPlaylist = await getRecommendations(trackIds);
      const localRecommendationPlaylist =
        await getRecommendations(localTrackIds);

      const trackUris = useRecommendationPlaylist?.tracks.map(
        (track) => track.uri,
      );
      const localTrackUris = localRecommendationPlaylist?.tracks.map(
        (track) => track.uri,
      );

      if (trackIds && localTrackUris) {
        const combinedUris = trackUris?.concat(localTrackUris);
        await createPlaylist(combinedUris!);
      }
    }
  };

  //   generatePlaylist();
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authToken ? (
    <div className="flex flex-col">
      {localFileTopTracks && myTopTracks ? (
        <button
          className="mt-4 w-[200px] rounded-3xl bg-[#21d760] p-2 font-bold text-black"
          onClick={() => generatePlaylist()}
        >
          do it
        </button>
      ) : null}
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
