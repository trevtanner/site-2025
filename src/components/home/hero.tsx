"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div
      className="hero min-h-[93vh] bg-blend-multiply bg-gray-400"
      style={{
        backgroundImage: "url('/homepage.jpg')",
      }}
    >
      <div className="h-full text-right">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Trevor Tanner</h1>
          <p className="mb-5 text-2xl">
            Full Stack Developer
            <br />
            Building stellar websites // One line at a time
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}
