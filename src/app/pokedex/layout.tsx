import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Serif,
  Fira_Sans,
  Roboto,
} from "next/font/google";
import "../globals.css";
import { ProjectsHeader } from "@/components/layout/projectLayouts/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: "400",
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira_sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevor's Pokedex",
  description: "Trevor's Custom Pokedex",
};

export default function PokedexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
