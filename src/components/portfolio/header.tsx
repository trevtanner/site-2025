"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdSend } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex-col text-center content-center relative h-[400px] bg-tertiary-100">
      <h1 className="contact-header">Portfolio</h1>
      <Button className="mt-4 bg-primary portfolio-text" size="lg" asChild>
        <Link href="mailto:contactus@trevorstanner.com">
          <MdSend className="" /> Get In Touch
        </Link>
      </Button>
    </div>
  );
}
