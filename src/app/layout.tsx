import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";

import TagProvider from "@/context/TagsContext";

import "./globals.scss";
import CustomSpotifyProvider from "@/context/SpotifyContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Waddle's Emporium",
  description: "Blee's blog on neocities",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable}`}>
        <CustomSpotifyProvider>
          <TagProvider>{children}</TagProvider>
        </CustomSpotifyProvider>
      </body>
    </html>
  );
}
