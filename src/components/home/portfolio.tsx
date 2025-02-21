"use client";

import Image from "next/image";
import tstImage from "@/public/tst-project.jpg";
import tamaImage from "@/public/TamaSquareLogo.jpg";
import pokeball from "@/public/pokeball.jpg";
import weather from "@/public/weather.jpg";
import ttblog from "@/public/ttblog-project.jpg";
import { useRouter } from "next/navigation";

export const Portfolio: React.FC = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-600 pt-8 pb-16">
      <h1 className="text-center text-5xl underline pb-8 text-white">Previous Projects</h1>
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
        <div
          className="relative group cursor-pointer"
          onClick={() => router.push(`https://www.tamalax.com/`)}
        >
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
        <div
          className="relative group cursor-pointer"
          onClick={() => router.push(`/pokedex`)}
        >
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
