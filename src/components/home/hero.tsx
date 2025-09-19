"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    // <div
    //   className=" min-h-[55vh] bg-blend-multiply bg-gray-300 relative"
    //   style={{
    //     backgroundImage: "url('/homepage.jpg')",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "80%",
    //     backgroundPositionX: "center",
    //   }}
    // >
    //   <div className="hero-header">
    //     <div className="max-w-xl">
    //       <h1 className="mb-3 hero-header-text">Trevor Tanner</h1>
    //       <p className="hero-sub-text">Full Stack Developer</p>
    //       <p className="mb-4 hero-sub-text-2">
    //         Building stellar websites // One line at a time
    //       </p>
    //       {/* <Button>Get Started</Button> */}
    //     </div>
    //   </div>
    // </div>

    <>
      {/* Desktop Layout */}
      <div className="hidden md:block relative h-[600px] bg-tertiary-100">
        {/* Container with 100px padding */}
        <div className="absolute inset-0 mx-[75px]">
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
    </>
  );
}
