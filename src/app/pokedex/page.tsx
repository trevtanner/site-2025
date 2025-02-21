"use server";

import { PokedexList } from "@/components/pokedex/pokedexList";

const gen1 = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151/");
const gen1Result = await gen1.json();
const gen1PokedexList = gen1Result.results;

const gen2 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151/"
);
const gen2Result = await gen2.json();
const gen2PokedexList = gen2Result.results;

const gen3 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251/"
);
const gen3Result = await gen3.json();
const gen3PokedexList = gen3Result.results;

const gen4 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386/"
);
const gen4Result = await gen4.json();
const gen4PokedexList = gen4Result.results;

const gen5 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=156&offset=493/"
);
const gen5Result = await gen5.json();
const gen5PokedexList = gen5Result.results;

const gen6 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649/"
);
const gen6Result = await gen6.json();
const gen6PokedexList = gen6Result.results;

const gen7 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721/"
);
const gen7Result = await gen7.json();
const gen7PokedexList = gen7Result.results;

const gen8 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=96&offset=809/"
);
const gen8Result = await gen8.json();
const gen8PokedexList = gen8Result.results;

const gen9 = await fetch(
  "https://pokeapi.co/api/v2/pokemon?limit=120&offset=905/"
);
const gen9Result = await gen9.json();
const gen9PokedexList = gen9Result.results;

const allGen = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025/");
const allGenResult = await allGen.json();
const allGenPokedexList = allGenResult.results;

export default async function Pokedex() {
  return (
    <div>
      <PokedexList
        gen1={gen1PokedexList}
        gen2={gen2PokedexList}
        gen3={gen3PokedexList}
        gen4={gen4PokedexList}
        gen5={gen5PokedexList}
        gen6={gen6PokedexList}
        gen7={gen7PokedexList}
        gen8={gen8PokedexList}
        gen9={gen9PokedexList}
        allGen={allGenPokedexList}
      />
    </div>
  );
}
