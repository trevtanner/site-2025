"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdSend, MdOutlineFileDownload } from "react-icons/md";
import { LuClock } from "react-icons/lu";

export const Contact: React.FC = () => {
  return (
    <div className="bg-secondary pb-16 pt-12">
      <h1 className="text-center text-5xl underline pb-8">How to Reach Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-10 pb-10 gap-4 lg:px-12">
        <div className="grid m-auto text-center text-xl px-16 py-2 bg-gray-600 text-white rounded-md shadow-2xl">
          <MdSend className="m-auto" /> Send Me an Email
        </div>
        <div className="grid m-auto text-center text-xl px-16 py-2 bg-gray-600 text-white rounded-md shadow-2xl">
          <MdOutlineFileDownload className="m-auto" /> Download Resume
        </div>
      </div>
      <div className="bg-gray-600 w-1/2 mx-auto rounded-sm p-4 shadow-2xl">
        <LuClock className="m-auto w-10 h-10 text-white" />
        <h1 className="text-center text-4xl text-white pb-2">Tireless Work</h1>
        <p className="text-white text-center">
          I will work day and night to get the product created that you want and
          fits your needs.
          <br /> Always built to your specifications and paired with unrivaled
          support.
        </p>
      </div>
    </div>
  );
};
