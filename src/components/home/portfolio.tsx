"use client";

import Image from "next/image";
import tstImage from "@/public/tst-project.jpg";
import tamaImage from "@/public/TamaSquareLogo.jpg";
import pokeball from "@/public/pokeball.jpg";
import weather from "@/public/weather.jpg";
import ttblog from "@/public/ttblog-project.jpg";

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-primary py-6">
      <h1 className="text-center text-5xl underline pb-4">Previous Projects</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-3/4 w-1/2 m-auto">
        <div className="relative group cursor-pointer">
          <Image
            src={tstImage}
            alt="image of code"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-center text-md font-bold group-hover:border p-2 transition duration-300 ease-in-out">
              TT Web Development & Design
            </span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <Image
            src={tamaImage}
            alt="image of Tama Lacrosse Logo"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-center text-md font-bold group-hover:border p-2 transition duration-300 ease-in-out">
              Tama Lacrosse E-Com Site
            </span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <Image
            src={pokeball}
            alt="image of a pokeball"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-center text-md font-bold group-hover:border p-2 transition duration-300 ease-in-out">
              Trevor's Pokedex
            </span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <Image
            src={weather}
            alt="image of clouds"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-white text-center text-md font-bold group-hover:border p-2 transition duration-300 ease-in-out">
              Weather App
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
