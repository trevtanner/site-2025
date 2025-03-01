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
      <h1 className="text-center text-5xl underline pb-16 text-white">
        Previous Projects
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-3/4 w-1/2 m-auto">
        <div className="relative group cursor-pointer">
          <Image
            src={tstImage}
            alt="image of code"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 grid grid-cols-1 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-center portfolio-text transition duration-300 ease-in-out uppercase">
              TT Web Development & Design
            </span>
            <span className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75">
              Technical Details
            </span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={tamaImage}
            alt="image of Tama Lacrosse Logo"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 grid grid-cols-1 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-center portfolio-text transition duration-300 ease-in-out uppercase">
              Tama Lacrosse E-Com Site
            </span>
            <span
              className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75"
              onClick={() => router.push(`https://www.tamalax.com/`)}
            >
              View
            </span>
            <span className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75">
              Technical Details
            </span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={pokeball}
            alt="image of a pokeball"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 grid grid-cols-1 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-center portfolio-text transition duration-300 ease-in-out uppercase">
              Trevor's Pokedex
            </span>
            <span
              className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75"
              onClick={() => router.push(`/pokedex`)}
            >
              View
            </span>
            <span className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75">
              Technical Details
            </span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={weather}
            alt="image of clouds"
            className="w-full h-auto brightness-50 transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 grid grid-cols-1 items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-center portfolio-text transition duration-300 ease-in-out uppercase">
              Weather App
            </span>
            <span
              className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75"
              onClick={() => router.push(`/weatherApp`)}
            >
              View
            </span>
            <span className="text-center portfolio-text cursor-pointer hover:underline hover:opacity-100 opacity-75">
              Technical Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
