import { baseUrl } from "@/utils/api-utils";
import spotifyApi, {
  refreshAccessToken,
  scopes,
} from "@/utils/spotify/spotify";

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const redirect_uri = `${baseUrl}/music`;

const getSpotifyAccessToken = async () => {
  try {
    const accessTokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId ? clientId : "cant_find_id",
          client_secret: clientSecret ? clientSecret : "cant_find_secret",
        }),
      },
    );

    const data = await accessTokenResponse.json();
    spotifyApi.setAccessToken(data.access_token);
    spotifyApi.setRefreshToken(data.refresh_token);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getArtistData = async (artistId: string) => {
  await getSpotifyAccessToken();
  const response = spotifyApi.getArtist(artistId);

  const data = (await response).body;
  return data;
};

export const getPlaylistData = async (playlistId: string) => {
  await getSpotifyAccessToken();
  const response = spotifyApi.getPlaylist(playlistId);

  const data = (await response).body;
  return data;
};

export const authorizeUser = async () => {
  const state = crypto.randomUUID();

  const queryString = {
    response_type: "code",
    client_id: clientId ? clientId : "client_id not found",
    scope: scopes,
    redirect_uri,
    state,
  };

  try {
    const authorizationUrl =
      "https://accounts.spotify.com/authorize?" +
      new URLSearchParams(queryString);

    window.location.href = authorizationUrl;
  } catch (error) {
    console.error(error);
  }
};

export const getImplicitAuthorization = async () => {
  const state = crypto.randomUUID();
  if (clientId) {
    localStorage.setItem("spotify_state", state);
    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(clientId);
    url += "&scope=" + encodeURIComponent(scopes);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);

    window.location.href = url;
  }
};

export const getUserToken = async (code: string, state: string) => {
  if (state === null) {
    window.location.href = `${baseUrl}/music`;
  } else {
    try {
      const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          },
          body: new URLSearchParams({
            code: code,
            redirect_uri: redirect_uri,
            grant_type: "authorization_code",
          }),
        },
      );

      const data = tokenResponse.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};

export const getCurrentUser = async (auth_token: string) => {
  try {
    if (auth_token) {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + auth_token,
        },
      });

      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export const findUser = async (access_token: string, user_id: string) => {
  try {
    if (access_token) {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${user_id}`,
        {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        },
      );
      const data = await response.json();

      return data;
    }
  } catch (error) {}
};
