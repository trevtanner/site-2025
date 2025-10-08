"use client";

import Image from "next/image";
import tstImage from "@/public/tst-project.jpg";
import tamaSite from "@/public/TamaSite.png";
import dasherSite from "@/public/dasherApparel.png";
import pokeball from "@/public/TTPokedex.png";
import weather from "@/public/tCast.png";
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
import Link from "next/link";

export const Portfolio: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  return (
    <div className="bg-tertiary-300 pt-12 pb-12 px-4">
      <div ref={ref} className={` ${isInView ? "in-view" : ""}`}>
        <h1 className="text-center md:text-left home-section-header md:b-12 md:px-16 animated-child">
          Previous Projects
        </h1>
        <div className="md:w-1/2 pb-8 md:px-16 md:text-left text-center animated-child delay-2">
          <p className="py-4 home-section-p-1">
            I have worked on a variety of projects, from full eCommerce websites
            to company dashboards and single-page applications. Each project
            receives my full attention, ensuring clean, efficient code and a
            seamless user experience.
          </p>
          <Button className="project-button">
            <Link href={"/portfolio"}>See My Work</Link>
          </Button>
        </div>
        <div>
          <div className="px-8">
            <Carousel className="w-full mx-auto animated-child delay-3">
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <Image
                    src={tstImage}
                    alt="image of code"
                    className="w-full brightness-80 hover:opacity-70 transition duration-300 ease-in-out"
                  />
                  <div className="w-3/4">
                    <p className="home-section-subheader py-2">
                      TT Web Development & Design
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        Website
                      </Button>
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
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
                    <p className="home-section-subheader py-2">
                      Fusion of Ideas HQ
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        Website
                      </Button>
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
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
                    <p className="home-section-subheader py-2">Tama Lacrosse</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        Website
                      </Button>
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        E-Com
                      </Button>
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
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
                    <p className="home-section-subheader py-2">
                      Dasher Apparel
                    </p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        Website
                      </Button>
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
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
                    <p className="home-section-subheader py-2">TT Pokedex</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
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
                    <p className="home-section-subheader py-2">T-Cast</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="project-button hover:bg-primary"
                      >
                        Web App
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
