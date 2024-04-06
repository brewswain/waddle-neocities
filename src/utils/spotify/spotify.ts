import SpotifyWebApi from "spotify-web-api-node";

import { baseUrl } from "../api-utils";

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const redirect_uri = `${baseUrl}/music`;

export const scopes = [
  "user-read-email",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-private",
  "user-read-email",
  "user-top-read",
  "user-library-read",
  "playlist-modify-public",
  "playlist-modify-private",
].join(","); // join separates each of our values by a comma as one string

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri: redirect_uri,
});

export default spotifyApi;
