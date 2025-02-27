"use client";

import React from "react";
import { personalInfo, topPackages } from "../../utils/siteData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsStack } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-12">
      <h1 className="text-center text-5xl underline pb-4">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Avatar className="m-auto w-32 h-32">
            <AvatarImage
              src="https://trevtanner.github.io/my-site/static/media/headshot.1647446acfd9fd3f0235.jpg"
              alt="Trevor Tanner Headshot"
            />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <h1 className="about-header text-center">Who am I?</h1>

          <p className="text-sm w-2/3 m-auto about-p text-center">
            {personalInfo.about1}
          </p>
          <br />
          <p className="text-sm w-2/3 m-auto about-p text-center">
            {personalInfo.about2}
          </p>
        </div>

        <div>
          <BsStack className="h-20 w-20 m-auto mt-8" />
          <h1 className="text-center about-header py-4">My Stack</h1>
          <Accordion type="single" collapsible className="w-3/4 m-auto">
            {topPackages.map((pkg, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="about-stack-header">
                  {pkg.title}
                </AccordionTrigger>
                <AccordionContent className="text-center about-p">
                  <p>{pkg.about}</p>
                  <a href={pkg.link} className="hover:underline">
                    {pkg.link}
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
