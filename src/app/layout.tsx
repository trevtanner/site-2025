import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  IBM_Plex_Serif,
  Fira_Sans,
  Roboto,
  Press_Start_2P,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const pokemon = Press_Start_2P({
  weight: "400",
  variable: "--font-press_start_2p",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trevorstanner.com"), // Replace with your actual domain
  title: {
    default: "TT Web Development & Design",
    template: `%s | TT Web Development & Design`,
  },
  description:
    "Expert web development and design services to bring your digital vision to life. Specializing in modern, responsive, and user-friendly websites.",
  keywords: [
    "web development",
    "web design",
    "custom websites",
    "responsive design",
    "front-end development",
    "back-end development",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Trevor Tanner", url: "https://trevorstanner.com" }],
  creator: "Trevor Tanner",
  openGraph: {
    title: "TT Web Development & Design",
    description: "Expert web development and design services.",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-KL7C8SC46Y" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${pokemon.variable} antialiased container`}
      >
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
