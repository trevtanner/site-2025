"use client";

import { usePathname } from "next/navigation";
import { FaBluesky, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Icons } from "../icons";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white py-8">
      <h1 className="text-center text-3xl">
        Building great websites for all of your needs.
      </h1>
      <h2 className="text-center text-2xl italic">Let's get started today.</h2>
      <div className="flex m-auto justify-center gap-2">
        <FaGithub className="h-8 w-8 my-auto hover:text-gray-400" />
        <FaBluesky className="h-8 w-8 my-auto hover:text-gray-400" />
        <FaLinkedin className="h-8 w-8 my-auto hover:text-gray-400" />
      </div>
      <p className="text-center text-md">
        Full stack developer using Next.js to build stunning single and multi
        page apps.
      </p>
      <p className="text-center text-md">
        Trevor Tanner © {currentYear} Copyright TT Web Development and Design
        <Link href={"/"} className="pl-2 text-blue-400 hover:text-white">
          PRIVACY POLICY
        </Link>
      </p>
    </div>
  );
}
