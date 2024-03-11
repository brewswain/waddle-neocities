const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const redirect_uri =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/music"
    : "waddle.neocities.org/music";

const getSpotifyAccessToken = async () => {
  try {
    const accessTokenResponse = await fetch(
      "https://accounts.spotify.com/api/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId ? clientId : "can't_find_id",
          client_secret: clientSecret ? clientSecret : "can't_find_secret",
        }),
      },
    );
    const data = accessTokenResponse.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getArtistData = async (artistId: string) => {
  const accessTokenResponse = await getSpotifyAccessToken();

  if (accessTokenResponse) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}`,
        {
          headers: {
            Authorization: "Bearer " + accessTokenResponse.access_token,
          },
        },
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  console.error("Sorry, access token couldn't be found");
};

export const authorizeUser = async () => {
  const state = "test_string_here";

  const queryString = {
    response_type: "code",
    client_id: clientId ? clientId : "client_id not found",
    scope: "user-read-private user-read-email",
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

export const getUserToken = async (code: string, state: string) => {
  if (!code || !state) {
    window.location.href =
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/music"
        : "waddle.neocities.org/music";
  } else {
    const encodedAuthorization = Buffer.from(
      clientId + ":" + clientSecret,
    ).toString("base64");
    try {
      const tokenResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + encodedAuthorization,
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

export const getCurrentUser = async (access_token: string) => {
  try {
    if (access_token) {
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });

      const data = await response.json();

      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
