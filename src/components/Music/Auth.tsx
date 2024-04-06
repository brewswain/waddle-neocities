"use client";

import React, { useEffect, useState } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import {
  authorizeUser,
  findUser,
  getCurrentUser,
  getUserToken,
} from "@/app/music/api";

const Auth = () => {
  const [currentUser, setCurrentUser] = useState();

  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  return code && state ? null : (
    <button onClick={() => authorizeUser()}>login</button>
  );
};

export default Auth;
