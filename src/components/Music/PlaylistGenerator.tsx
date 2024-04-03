import {
  authorizeUser,
  getCurrentUser,
  getImplicitAuthorization,
} from "@/app/music/api";
import { SpotifyContext } from "@/context/SpotifyContext";
import spotifyApi from "@/utils/spotify/spotify";
import { useContext } from "react";

interface PlaylistGeneratorProps {
  user?: SpotifyApi.UserProfileResponse;
}

const PlaylistGenerator = ({ user }: PlaylistGeneratorProps) => {
  const { authToken } = useContext(SpotifyContext);

  const fetchData = async () => {
    try {
      const response = await getCurrentUser(authToken);

      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };
  if (authToken) {
    fetchData();
  }

  return authToken ? (
    <div>Authenticated!</div>
  ) : (
    <button onClick={() => getImplicitAuthorization()}>login</button>
  );
  if (!user)
    return (
      <>
        <button
          onClick={() => {
            authorizeUser();
          }}
        >
          Sign In
        </button>
      </>
    );
  return;
};

export default PlaylistGenerator;
