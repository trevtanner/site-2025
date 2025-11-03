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
          src="/office-unsplash.jpg"
          alt="Background Image"
          fill
          className="object-cover opacity-30"
          priority={true}
        />
      </div>
      <div className="h-full text-center content-center animate-fade-in-up">
        <h1 className="hero-header-text">Portfolio</h1>
        <Button
          className="mt-4 bg-primary portfolio-text"
          size="lg"
          asChild
          aria-label="Send Email Button"
        >
          <Link
            href="mailto:contactus@trevorstanner.com"
            aria-label="Send Email Link"
          >
            <MdSend className="" /> Get In Touch
          </Link>
        </Button>
      </div>
    </div>
  );
}
