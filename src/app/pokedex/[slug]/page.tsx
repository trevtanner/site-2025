"use server";

import { PokedexEntry } from "@/components/pokedex/pokedexEntry";
import { PokemonClient } from "pokenode-ts";

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
    <div className="min-h-[75vh] bg-tertiary-300">
      <PokedexEntry
        slug={slug}
        pokemonData={pokemonData}
        pokedexData={pokedexData}
      />
    </div>
  );
}
