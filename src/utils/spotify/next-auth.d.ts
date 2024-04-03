import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    accessTokenExpires: number;
    refreshToken: string;
    accessToken: string;
    username: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string | null | undefined;
      refreshToken: string;
      username: string;
    } & DefaultSession["user"];
  }
}
