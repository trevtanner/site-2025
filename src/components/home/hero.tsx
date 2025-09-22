"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  MdFoundation,
  MdDisplaySettings,
  MdHandyman,
  MdMyLocation,
} from "react-icons/md";
import { useInView } from "@/utils/useInView";

export default function Hero() {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  return (
    <div>
      {/* Desktop Layout */}
      <div className="hidden md:block relative h-[700px] bg-tertiary-100">
        {/* Container with 100px padding */}
        <div className="absolute inset-0">
          <Image
            src="/homepage.jpg"
            alt="Background Image"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        {/* Text overlay positioned on the left */}
        <div className="absolute left-0 top-0 h-full flex items-center animate-fade-in-up">
          <div className="bg-[rgba(21,59,80,0.8)] p-6 ">
            <h1 className="hero-header-text animate-fade-in-up delay-400">
              Trevor Tanner
            </h1>
            <p className="hero-sub-text animate-fade-in-up delay-600">
              Full Stack Developer
            </p>
            <p className="hero-sub-text-2 animate-fade-in-up delay-800">
              Building stellar websites // One line at a time
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout (screens <768px) */}
      <div className="block md:hidden relative h-[50vh]">
        <div className="block md:hidden relative h-2/3">
          <Image
            src="/homepage.jpg"
            alt="Background Image"
            fill
            className="w-full object-cover"
            priority={true}
          />
        </div>
        {/* Full-width text section below the image */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[rgba(31,41,55,0.8)] p-6 animate-fade-in-up">
          <h1 className="hero-header-text animate-fade-in-up delay-400">
            Trevor Tanner
          </h1>
          <p className="hero-sub-text animate-fade-in-up delay-600">
            Full Stack Developer
          </p>
          <p className="hero-sub-text-2 animate-fade-in-up delay-800">
            Building stellar websites // One line at a time
          </p>
        </div>
      </div>
      <div
        // ref={ref}
        className={`hidden relative h-[100px] md:grid grid-cols-4 text-center m-auto px-4 about-p-title`}
      >
        <div
          ref={ref}
          className={`animatedBoxRight ${
            isInView ? "visible" : ""
          } m-auto flex gap-2`}
        >
          <MdFoundation className="m-auto w-5 h-5" />
          Founded 2019
        </div>
        <div
          ref={ref}
          className={`animatedBoxRight ${
            isInView ? "visible" : ""
          } m-auto flex gap-2`}
        >
          <MdDisplaySettings className="m-auto w-5 h-5" />
          Fine-Tuned Projects
        </div>
        <div
          ref={ref}
          className={`animatedBoxRight ${
            isInView ? "visible" : ""
          } m-auto flex gap-2`}
        >
          <MdMyLocation className="m-auto w-5 h-5" /> Orange County, CA
        </div>
        <div
          ref={ref}
          className={`animatedBoxRight ${
            isInView ? "visible" : ""
          } m-auto flex gap-2`}
        >
          <MdHandyman className="m-auto w-5 h-5" />
          Personalized Work
        </div>
      </div>
    </div>
  );
}
