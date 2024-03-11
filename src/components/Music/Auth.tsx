"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { authorizeUser, getCurrentUser, getUserToken } from "@/app/music/api";

const Auth = () => {
  const [currentUser, setCurrentUser] = useState();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  useEffect(() => {
    if (code && state) {
      console.log({ code, state });
      const response = getUserToken(code, state);

      response.then(
        (user: {
          access_token: string;
          token_type: string;
          expires_in: number;
          refresh_token: string;
          scope: string;
        }) =>
          getCurrentUser(user.access_token).then((currentUser) =>
            console.log(currentUser),
          ),
      );
    }
  }, []);

  return code && state ? null : (
    <button onClick={() => authorizeUser()}>login</button>
  );
};

export default Auth;
