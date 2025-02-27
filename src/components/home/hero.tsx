"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div
      className=" min-h-[93vh] bg-blend-multiply bg-gray-500"
      style={{
        backgroundImage: "url('/homepage.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-20 left-20 text-right">
        <div className="max-w-md">
          <h1 className="mb-3 hero-header">Trevor Tanner</h1>
          <p className="hero-sub-text">Full Stack Developer</p>
          <p className="mb-4 hero-sub-text-2">
            Building stellar websites // One line at a time
          </p>
          {/* <Button>Get Started</Button> */}
        </div>
      </div>
    </div>
  );
}
