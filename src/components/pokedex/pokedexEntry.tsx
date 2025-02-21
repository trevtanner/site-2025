"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Button } from "@/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Pokemon, PokemonSpecies } from "pokenode-ts";

interface PokedexListItemProps {
  slug: number;
  pokemonData: Pokemon;
  pokedexData: PokemonSpecies;
}

export const PokedexEntry: React.FC<PokedexListItemProps> = ({
  slug,
  pokedexData,
  pokemonData,
}) => {
  const router = useRouter();

  function fixString(name: string) {
    if (name === "nidoran-f") {
      return (name = "Nidoran");
    }
    if (name === "nidoran-m") {
      return (name = "Nidoran");
    }
    if (name === "mr-mime") {
      return (name = "Mr. Mime");
    }
    if (name === "farfetchd") {
      return (name = "Farfetch'd");
    }
    if (name === "deoxys-normal") {
      return (name = "Deoxys");
    }
    if (name === "urshifu-single-strike") {
      return (name = "Urshifu");
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  function fixType(type: string, index: number) {
    if (type === "normal") {
      return (
        <Badge className="bg-gray-700 pokedex-entry" key={index}>
          Normal
        </Badge>
      );
    }
    if (type === "fire") {
      return (
        <Badge className="bg-red-700 pokedex-entry" key={index}>
          Fire
        </Badge>
      );
    }
    if (type === "fighting") {
      return (
        <Badge className="bg-orange-400 pokedex-entry" key={index}>
          Fighting
        </Badge>
      );
    }
    if (type === "water") {
      return (
        <Badge className="bg-blue-700 pokedex-entry" key={index}>
          Water
        </Badge>
      );
    }
    if (type === "flying") {
      return (
        <Badge className="bg-blue-400 pokedex-entry" key={index}>
          Flying
        </Badge>
      );
    }
    if (type === "grass") {
      return (
        <Badge className="bg-green-700 pokedex-entry" key={index}>
          Grass
        </Badge>
      );
    }
    if (type === "poison") {
      return (
        <Badge className="bg-purple-700 pokedex-entry" key={index}>
          Poison
        </Badge>
      );
    }
    if (type === "electric") {
      return (
        <Badge className="bg-yellow-500 pokedex-entry" key={index}>
          Electric
        </Badge>
      );
    }
    if (type === "ground") {
      return (
        <Badge className="bg-amber-800 pokedex-entry" key={index}>
          Ground
        </Badge>
      );
    }
    if (type === "psychic") {
      return (
        <Badge className="bg-pink-700 pokedex-entry" key={index}>
          Psychic
        </Badge>
      );
    }
    if (type === "rock") {
      return (
        <Badge className="bg-amber-500 pokedex-entry" key={index}>
          Rock
        </Badge>
      );
    }
    if (type === "ice") {
      return (
        <Badge className="bg-sky-400 pokedex-entry" key={index}>
          Ice
        </Badge>
      );
    }
    if (type === "bug") {
      return (
        <Badge className="bg-lime-700 pokedex-entry" key={index}>
          Bug
        </Badge>
      );
    }
    if (type === "dragon") {
      return (
        <Badge className="bg-blue-600 pokedex-entry" key={index}>
          Dragon
        </Badge>
      );
    }
    if (type === "ghost") {
      return (
        <Badge className="bg-indigo-700 pokedex-entry" key={index}>
          Ghost
        </Badge>
      );
    }
    if (type === "dark") {
      return (
        <Badge className="bg-zinc-700 pokedex-entry" key={index}>
          Dark
        </Badge>
      );
    }
    if (type === "steel") {
      return (
        <Badge className="bg-cyan-700 pokedex-entry" key={index}>
          Steel
        </Badge>
      );
    }
    if (type === "fairy") {
      return (
        <Badge className="bg-pink-400 pokedex-entry" key={index}>
          Fairy
        </Badge>
      );
    } else {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
  }

  function fixHeight(height: number | undefined) {
    if (height === undefined) {
      return 0;
    }
    let inches = parseInt((height * 10 * 0.393700787).toFixed(0));
    let ft = Math.floor(inches / 12);
    inches %= 12;
    return `${ft}' ${inches}"`;
  }
  function fixWeight(weight: number | undefined) {
    if (weight === undefined) {
      return 0;
    }
    const lbs = ((weight / 10) * 2.20462).toFixed(1);
    return lbs;
  }

  function fixID(id: any) {
    let entry = ("000" + id).slice(-4);
    return entry;
  }

  return (
    <div className="m-auto w-3/4 pt-8">
      <div className="m-auto w-1/2">
        <Card className="mt-4">
          <CardHeader>
            <img
              src={`https://img.pokemondb.net/sprites/home/normal/${pokemonData.name}.png`}
              alt={pokemonData.name}
              className="h-48 w-48 m-auto"
            />
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2">
              <div className="text-center">
                <h1 className="pokedex-entry-title">
                  {fixString(pokemonData.name)}
                </h1>
                <p className="pokedex-entry-2"># {fixID(pokemonData?.id)}</p>
              </div>
              <div className="text-center">
                <p className="underline pokedex-entry-2">Data</p>
                <div className="pokedex-entry-text">
                  Type:
                  {pokemonData?.types.map((type, index) =>
                    fixType(type.type.name, index)
                  )}
                </div>
                <p className="pokedex-entry-text">
                  Height: {fixHeight(pokemonData?.height)}
                </p>
                <p className="pokedex-entry-text">
                  Weight: {fixWeight(pokemonData?.weight)} lbs.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="pokedex-entry-text text-center">
              {pokedexData.flavor_text_entries
                .find((entry) => entry.language.name === "en")
                ?.flavor_text.replace("\n", " ")
                .replace("\f", " ")
                .replace("POKéMON", "pokémon")}
            </p>
          </CardFooter>
        </Card>
        <div className="flex justify-between pt-4">
          <Button
            className={`${pokemonData?.id === 1 ? "hidden" : ""}`}
            onClick={() => {
              if (pokemonData?.id === 1) {
                return;
              }
              router.push(`/pokedex/${pokemonData?.id - 1}`);
            }}
          >
            <ChevronLeft />
            Previous
          </Button>
          <Button onClick={() => router.push(`/pokedex`)}>
            Back to Pokedex
          </Button>
          <Button
            className={`${pokemonData?.id === 1025 ? "hidden" : ""}`}
            onClick={() => {
              if (pokemonData?.id === 1025) {
                return;
              }
              router.push(`/pokedex/${pokemonData?.id + 1}`);
            }}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
