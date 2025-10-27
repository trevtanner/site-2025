"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdSend } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex-col text-center content-center relative h-[500px] bg-gradient-to-r from-black to-gray-700">
      <div className="absolute inset-0">
        <Image
          src="/contact-pixabay.jpg"
          alt="Background Image"
          fill
          className="object-cover opacity-15"
          priority={true}
        />
      </div>
      <div className="h-full text-center content-center animate-fade-in-up">
        <h1 className="hero-header-text">Contact Me</h1>
      </div>
    </div>
  );
}
