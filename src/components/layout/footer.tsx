"use client";

import { FaBluesky, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
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
        <div className="xl:grid xl:grid-cols-12 gap-6 xl:px-4">
          <div className="gap-x-4 xl:col-span-2 col-span-1 pb-2 xl:pb-0 mx-auto grid xl:grid-cols-1 grid-cols-4 text-center xl:text-left">
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/"}>
                Home
              </Link>
            </div>
            <div className="py-1">
              <Link
                className="footer-link hover:text-secondary"
                href={"/portfolio"}
              >
                Portfolio
              </Link>
            </div>
            <div className="py-1">
              <Link
                className="footer-link hover:text-secondary"
                href={"/resume"}
              >
                Resume
              </Link>
            </div>
            <div className="py-1">
              <Link className="footer-link hover:text-secondary" href={"/contact"}>
                Contact
              </Link>
            </div>
          </div>
          <div className="xl:col-span-8 col-span-1 m-auto">
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
          </div>

          <div className="gap-x-4 xl:col-span-2 col-span-1 mx-auto text-center xl:text-left">
            <div className="py-2 text-center">
              <Link
                href="mailto:contactus@trevorstanner.com"
                className="footer-text hover:text-secondary underline hover:no-underline"
              >
                contactus@trevorstanner.com
              </Link>
            </div>

            <div className="flex m-auto justify-center xl:justify-center gap-2 pt-2">
              <Link href="https://github.com/trevtanner" target="_blank">
                <FaGithub className="h-6 w-6 my-auto hover:text-secondary cursor-pointer" />
              </Link>
              <Link href="https://x.com/trevortannerdev" target="_blank">
                <FaXTwitter className="h-6 w-6 my-auto hover:text-secondary cursor-pointer" />
              </Link>
              {/* <Link href="https://github.com/trevtanner">
                <FaBluesky className="h-6 w-6 my-auto hover:text-secondary cursor-pointer" />
              </Link> */}
              <Link
                href="https://www.linkedin.com/in/trevorstanner/"
                target="_blank"
              >
                <FaLinkedin className="h-6 w-6 my-auto hover:text-secondary cursor-pointer " />
              </Link>
            </div>
          </div>
          <div className="col-span-4">
            {/* <Image
              src={ttwddLogo}
              alt="image of code"
              className="gap-6 mt-2 m-auto w-1/3 xl:w-1/2 rounded-full opacity-70"
            /> */}
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
