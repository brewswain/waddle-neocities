import type { Metadata } from "next";
import { Inter } from "next/font/google";

import TagProvider from "@/context/TagsContext";

import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <TagProvider>{children}</TagProvider>
      </body>
    </html>
  );
}
