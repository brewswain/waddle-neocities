"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface SpotifyContextInterface {
  authToken: string;
  setAuthToken: Dispatch<SetStateAction<string>>;
}

export const SpotifyContext = createContext<SpotifyContextInterface>({
  authToken: "",
  setAuthToken: () => {},
});

const CustomSpotifyProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState("");

  return (
    <SpotifyContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default CustomSpotifyProvider;
