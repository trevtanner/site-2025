"use client";

import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { useRouter } from "next/navigation";

interface PokedexListItemProps {
  entry: {
    name: string;
    url: string;
  };
  dexIndex: number;
  selectedGen: string;
}

export const PokedexListItem: React.FC<PokedexListItemProps> = ({
  entry,
  dexIndex,
  selectedGen,
}) => {
  const router = useRouter();
  function fixNumber(number: any) {
    if (selectedGen === "gen2") {
      number = number + 151;
    }
    if (selectedGen === "gen3") {
      number = number + 251;
    }
    if (selectedGen === "gen4") {
      number = number + 386;
    }
    if (selectedGen === "gen5") {
      number = number + 493;
    }
    if (selectedGen === "gen6") {
      number = number + 649;
    }
    if (selectedGen === "gen7") {
      number = number + 721;
    }
    if (selectedGen === "gen8") {
      number = number + 809;
    }
    if (selectedGen === "gen9") {
      number = number + 905;
    }
    number = number + 1;
    number = ("000" + number).slice(-4);
    return number;
  }

  function slugNumber(number: any) {
    if (selectedGen === "gen2") {
      number = number + 151;
    }
    if (selectedGen === "gen3") {
      number = number + 251;
    }
    if (selectedGen === "gen4") {
      number = number + 386;
    }
    if (selectedGen === "gen5") {
      number = number + 493;
    }
    if (selectedGen === "gen6") {
      number = number + 649;
    }
    if (selectedGen === "gen7") {
      number = number + 721;
    }
    if (selectedGen === "gen8") {
      number = number + 809;
    }
    if (selectedGen === "gen9") {
      number = number + 905;
    }
    number = number + 1;
    return number;
  }

  function fixNames(name: string) {
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
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => router.push(`/pokedex/${slugNumber(dexIndex)}`)}
    >
      <TableCell>
        <Avatar className="m-auto w-20 h-20">
          <AvatarImage
            src={`https://img.pokemondb.net/sprites/home/normal/${entry.name}.png`}
            alt="Pokemon image"
          />
          <AvatarFallback>
            {entry.name.slice(0, 2).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="pokedex-entry-text">
        {fixNames(entry.name)}
      </TableCell>
      <TableCell className="pokedex-entry-text text-end">
        # {fixNumber(dexIndex)}
      </TableCell>
    </TableRow>
  );
};
