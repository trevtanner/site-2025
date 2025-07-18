"use client";

import { FaBluesky, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
// import ttLogo from "@/public/TT-logo-trans.png";
// import ttLogoWhite from "@/public/TTlogo.jpg";
import ttwddLogo from "@/public/TTWDDLargeLogo.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-primary text-tertiary-100 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="gap-x-4 md:col-span-3 pb-2 md:pb-0 mx-auto grid md:grid-cols-1 grid-cols-4 text-center md:text-left">
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/"}>
                About
              </Link>
            </div>
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/"}>
                Portfolio
              </Link>
            </div>
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/"}>
                Resume
              </Link>
            </div>
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/"}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:col-span-8 m-auto">
            <h1 className="text-center footer-header">
              Building great websites for all of your needs.
            </h1>
            <h2 className="text-center footer-sub-header">
              Let&apos;s get started today.
            </h2>
            <p className="text-center footer-text">
              Full stack developer using Next.js to build stunning single and
              multi page apps.
            </p>

            <div className="py-2 text-center">
              <Link
                href={"/"}
                className="footer-text hover:text-secondary underline hover:no-underline"
              >
                contactus@trevorstanner.com
              </Link>
            </div>

            <div className="flex m-auto justify-center md:justify-center gap-2 pt-2">
              <FaGithub className="h-6 w-6 my-auto hover:text-secondary cursor-pointer" />
              <FaBluesky className="h-6 w-6 my-auto hover:text-secondary cursor-pointer" />
              <FaLinkedin className="h-6 w-6 my-auto hover:text-secondary cursor-pointer " />
            </div>
          </div>
          <div className="col-span-4">
            <Image
              src={ttwddLogo}
              alt="image of code"
              className="gap-6 mt-2 m-auto w-1/3 md:w-1/2 rounded-full opacity-70"
            />
          </div>
        </div>
      </div>
      <div className="py-4 bg-tertiary-100">
        <p className="text-center text-md m-auto">
          Trevor Tanner © {currentYear} Copyright TT Web Development and Design
          |
          <Link href={"/privacy-policy"} className="pl-2 hover:text-white">
            Privacy Policy
          </Link>{" "}
          |
          <Link href={"/"} className="pl-2 hover:text-white">
            Accessibility
          </Link>
        </p>
      </div>
    </>
  );
}
