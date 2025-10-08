import type { Metadata } from "next";
import "../globals.css";

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
