"use client";

import Image from "next/image";
import tstImage from "@/public/tst-project.jpg";
import tamaSite from "@/public/tamaSite.png";
import dasherSite from "@/public/dasherApparel.png";
import pokeball from "@/public/pokeball.jpg";
import weather from "@/public/weather.jpg";
import FoI from "@/public/FoIHQ.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { useInView } from "@/utils/useInView";

export const Portfolio: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <div className="bg-tertiary-300 pt-12 pb-12 px-8">
      <div ref={ref} className={`animatedBox ${isInView ? "visible" : ""}`}>
        <h1 className="text-center md:text-left about-header md:b-12 md:px-16">
          Previous Projects
        </h1>
        <div className="md:w-1/2 pb-8 md:px-16 md:text-left text-center">
          <p className="py-4 portfolio-p">
            I have worked on a variety of projects, from full eCommerce websites
            to company dashboards and single-page applications. Each project
            receives my full attention, ensuring clean, efficient code and a
            seamless user experience.
          </p>
          <Button className="">See Our Work</Button>
        </div>
        <div>
          <div className="px-8">
            <Carousel className="w-full mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={tstImage}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">
                      TT Web Development & Design
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Website
                      </Button>
                      <Button size="sm" className="project-button">
                        SEO
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={FoI}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">Fusion of Ideas HQ</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Website
                      </Button>
                      <Button size="sm" className="project-button">
                        Dashboard
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={tamaSite}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">Tama Lacrosse</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Website
                      </Button>
                      <Button size="sm" className="project-button">
                        E-Com
                      </Button>
                      <Button size="sm" className="project-button">
                        SEO
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={dasherSite}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">Dasher Apparel</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Website
                      </Button>
                      <Button size="sm" className="project-button">
                        SEO
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={pokeball}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">TT Pokedex</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Web App
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={weather}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="portfolio-heading py-2">TT Weather</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="project-button">
                        Web App
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 m-auto">
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
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
