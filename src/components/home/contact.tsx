"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdSend, MdOutlineFileDownload } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import Image from "next/image";
import ttLogoWhite from "@/public/TTlogo.jpg";

export const Contact: React.FC = () => {
  return (
    <div className=" pb-16 bg-tertiary-100 pt-12 px-12 md:grid md:grid-cols-2">
      <div className="">
        {/* <LuClock className="w-10 h-10 text-primary my-auto" /> */}
        <h1 className="md:text-start text-center text-4xl text-primary pb-2">
          Tireless Work
        </h1>
        <p className="text-primary md:text-start text-center">
          I will work day and night to get the product created that you want and
          fits your needs.
          <br /> Always built to your specifications and paired with unrivaled
          support.
        </p>
        <div className="md:text-start text-center w-full">
          <Button className="mt-2 bg-primary">
            <MdSend className="" /> Reach Out
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
