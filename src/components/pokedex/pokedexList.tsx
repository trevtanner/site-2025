"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/ui/table";
import { PokedexListItem } from "./pokedexListItem";

interface PokedexListProps {
  gen1: {
    name: string;
    url: string;
  }[];
  gen2: {
    name: string;
    url: string;
  }[];
  gen3: {
    name: string;
    url: string;
  }[];
  gen4: {
    name: string;
    url: string;
  }[];
  gen5: {
    name: string;
    url: string;
  }[];
  gen6: {
    name: string;
    url: string;
  }[];
  gen7: {
    name: string;
    url: string;
  }[];
  gen8: {
    name: string;
    url: string;
  }[];
  gen9: {
    name: string;
    url: string;
  }[];
  allGen: {
    name: string;
    url: string;
  }[];
}

export const PokedexList: React.FC<PokedexListProps> = ({
  gen1,
  gen2,
  gen3,
  gen4,
  gen5,
  gen6,
  gen7,
  gen8,
  gen9,
  allGen,
}) => {
  const [selectedGen, setSelectedGen] = useState(gen1);
  const [selectedGenString, setSelectedGenString] = useState("gen1");
  return (
    <div className="bg-secondary py-6">
      <h1 className="text-center text-5xl underline">Pokedex</h1>
      <div className="px-24 grid grid-cols-6 pt-4">
        <div className="col-span-1 col-start-2">
          <div className="fixed">
            <Table>
              <TableBody>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(allGen);
                      setSelectedGenString("allGen");
                    }}
                  >
                    All
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen1);
                      setSelectedGenString("gen1");
                    }}
                  >
                    Generation 1
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen2);
                      setSelectedGenString("gen2");
                    }}
                  >
                    Generation 2
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen3);
                      setSelectedGenString("gen3");
                    }}
                  >
                    Generation 3
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen4);
                      setSelectedGenString("gen4");
                    }}
                  >
                    Generation 4
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen5);
                      setSelectedGenString("gen5");
                    }}
                  >
                    Generation 5
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen6);
                      setSelectedGenString("gen6");
                    }}
                  >
                    Generation 6
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen7);
                      setSelectedGenString("gen7");
                    }}
                  >
                    Generation 7
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen8);
                      setSelectedGenString("gen8");
                    }}
                  >
                    Generation 8
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className="pokedex-entry-text text-center"
                    onClick={() => {
                      setSelectedGen(gen9);
                      setSelectedGenString("gen9");
                    }}
                  >
                    Generation 9
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="col-span-3">
          <Table>
            <TableBody>
              {selectedGen.map((entry, index: number) => (
                <PokedexListItem
                  entry={entry}
                  key={index}
                  dexIndex={index}
                  selectedGen={selectedGenString}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
