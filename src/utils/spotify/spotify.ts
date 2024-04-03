import SpotifyWebApi from "spotify-web-api-node";
import { NextAuthOptions } from "next-auth";

import { baseUrl } from "../api-utils";
import SpotifyProvider from "next-auth/providers/spotify";

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
  "user-library-read",
  "user-read-playback-state",
  "user-modify-playback-state",
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

export const refreshAccessToken = async (token: any) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: clientId ? clientId : "CLIENT_ID_NOT_FOUND",
      clientSecret: clientSecret ? clientSecret : "CLIENT_SECRET_NOT_FOUND",
      authorization: LOGIN_URL,
    }),
  ],

  secret: process.env.JWT_SECRET,

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at! * 1000,
        };
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      console.warn("ACCESS TOKEN HAS EXPIRED, REFRESHING.");
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.username = token.username;

        return session;
      }
      return session;
    },
  },
};

export default spotifyApi;
