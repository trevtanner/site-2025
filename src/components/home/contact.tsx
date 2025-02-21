"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export const Contact: React.FC = () => {
  return (
    <div className="bg-secondary py-16">
      <h1 className="text-center text-5xl underline">How to Reach Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid m-auto text-center text-2xl">
          <Button variant="outline">Send Me an Email</Button>
        </div>

        <div className="grid flex-grow min-h-32 place-items-center text-center text-2xl">
          <Button variant="outline">Download Resume</Button>
        </div>
      </div>
      <div className="bg-gray-600 w-1/2 mx-auto rounded-sm p-4">
        <h1 className="text-center text-4xl text-white">Tireless Work</h1>
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
