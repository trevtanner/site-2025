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
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "allGen"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    } `}
                    onClick={() => {
                      setSelectedGen(allGen);
                      setSelectedGenString("allGen");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    National Pokedex
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen1"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen1);
                      setSelectedGenString("gen1");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 1
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen2"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen2);
                      setSelectedGenString("gen2");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 2
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen3"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen3);
                      setSelectedGenString("gen3");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 3
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen4"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen4);
                      setSelectedGenString("gen4");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 4
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen5"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen5);
                      setSelectedGenString("gen5");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 5
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen6"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen6);
                      setSelectedGenString("gen6");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 6
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen7"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen7);
                      setSelectedGenString("gen7");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 7
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen8"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen8);
                      setSelectedGenString("gen8");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Generation 8
                  </TableCell>
                </TableRow>
                <TableRow className="cursor-pointer">
                  <TableCell
                    className={` text-center hover:text-gray-900 ${
                      selectedGenString === "gen9"
                        ? "selected-pokedex-entry-text"
                        : "pokedex-entry-text text-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedGen(gen9);
                      setSelectedGenString("gen9");
                      scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
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
