"use client";

import React from "react";
import { personalInfo, topPackages } from "../../utils/siteData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About: React.FC = () => {
  return (
    <div className="bg-secondary py-6">
      <h1 className="text-center text-5xl underline">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid m-auto text-center text-2xl">
          <Avatar className="m-auto w-32 h-32">
            <AvatarImage
              src="https://trevtanner.github.io/my-site/static/media/headshot.1647446acfd9fd3f0235.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Who am I?
          </h1>
          <br />
          <p className="text-sm w-2/3 m-auto about-p">{personalInfo.about}</p>
        </div>

        <div className="grid flex-grow min-h-32 place-items-center text-center text-2xl">
          <h1>My Stack</h1>
          <br />
          {topPackages.map((pkg, index) => (
            <div
              className="grid flex-grow min-h-32 place-items-center text-center text-xl py-2"
              key={index}
            >
              {pkg.title}
              <br />
              <p className="text-sm w-2/3">{pkg.about}</p>
              <a
                href={pkg.link}
                className="text-sm w-2/3 text-neutral hover:underline"
              >
                {pkg.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
