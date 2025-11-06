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
    if (name === "mr-rime") {
      return (name = "Mr. Rime");
    }
    if (name === "farfetchd") {
      return (name = "Farfetch'd");
    }
    if (name === "deoxys-normal") {
      return (name = "Deoxys");
    }
    if (name === "urshifu-single-strike") {
      return (name = "Urshifu");
    }
    if (name === "wormadam-plant") {
      return (name = "Wormadam");
    }
    if (name === "mime-jr") {
      return (name = "Mime Jr");
    }
    if (name === "giratina-altered") {
      return (name = "Giratina");
    }
    if (name === "shaymin-land") {
      return (name = "Shaymin");
    }
    if (name === "basculin-red-striped") {
      return (name = "Basculin");
    }
    if (name === "darmanitan-standard") {
      return (name = "Darmanitan");
    }
    if (name === "tornadus-incarnate") {
      return (name = "Tornadus");
    }
    if (name === "thundurus-incarnate") {
      return (name = "Thundurus");
    }
    if (name === "landorus-incarnate") {
      return (name = "Landorus");
    }
    if (name === "keldeo-ordinary") {
      return (name = "Keldeo");
    }
    if (name === "meloetta-aria") {
      return (name = "Meloetta");
    }
    if (name === "meowstic-male") {
      return (name = "Meowstic");
    }
    if (name === "aegislash-shield") {
      return (name = "Aegislash");
    }
    if (name === "pumpkaboo-average") {
      return (name = "Pumpkaboo");
    }
    if (name === "gourgeist-average") {
      return (name = "Gourgeist");
    }
    if (name === "zygarde-50") {
      return (name = "Zygarde");
    }
    if (name === "lycanroc-midday") {
      return (name = "Lycanroc");
    }
    if (name === "wishiwashi-solo") {
      return (name = "Wishiwashi");
    }
    if (name === "minior-red-meteor") {
      return (name = "Minior");
    }
    if (name === "mimikyu-disguised") {
      return (name = "Mimikyu");
    }
    if (name === "tapu-koko") {
      return (name = "Tapu Koko");
    }
    if (name === "tapu-lele") {
      return (name = "Tapu Lele");
    }
    if (name === "tapu-bulu") {
      return (name = "Tapu Bulu");
    }
    if (name === "tapu-fini") {
      return (name = "Tapu Fini");
    }
    if (name === "toxtricity-amped") {
      return (name = "Toxtricity");
    }
    if (name === "eiscue-ice") {
      return (name = "Eiscue");
    }
    if (name === "indeedee-male") {
      return (name = "Indeedee");
    }
    if (name === "morpeko-full-belly") {
      return (name = "Morpeko");
    }
    if (name === "basculegion-male") {
      return (name = "Basculegion");
    }
    if (name === "enamorus-incarnate") {
      return (name = "Enamorus");
    } else {
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }

  return (
    <TableRow
      className="cursor-pointer hover:bg-tertiary-500"
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
