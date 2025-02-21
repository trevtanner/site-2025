"use server";

import { PokedexEntry } from "@/components/pokedex/pokedexEntry";
import { Pokemon, PokemonClient } from "pokenode-ts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const slug = (await params).slug;
  const api = new PokemonClient();

  const pokemonData = await api.getPokemonById(slug);
  const pokedexData = await api.getPokemonSpeciesById(slug);

  return (
    <PokedexEntry
      slug={slug}
      pokemonData={pokemonData}
      pokedexData={pokedexData}
    />
  );
}
