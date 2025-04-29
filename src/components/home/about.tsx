"use client";

import React, { useState } from "react";
import { personalInfo, topPackages, wdd, seo } from "../../utils/siteData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsStack } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const About: React.FC = () => {
  const [displayedImg, setDisplayedImg] = useState("item-about");

  console.log(displayedImg);

  const imgURL =
    displayedImg === "item-wdd"
      ? "/wdd-400x600.jpg"
      : displayedImg === "item-seo"
      ? "/seo-400x600.jpg"
      : displayedImg === "item-tools"
      ? "/tools-400x600.jpg"
      : "/headshot-400x600.jpg";

  return (
    <div className="pt-12 pb-12 bg-tertiary-100 px-8">
      <h1 className="text-center md:text-left about-header pb-4 md:px-12">About/Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-4">
          {/* <Avatar className="m-auto w-32 h-32">
            <AvatarImage
              src="https://trevtanner.github.io/my-site/static/media/headshot.1647446acfd9fd3f0235.jpg"
              alt="Trevor Tanner Headshot"
            />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar> */}
          <Accordion
            type="single"
            className="w-3/4 m-auto"
            defaultValue="item-about"
            onValueChange={(e) => setDisplayedImg(e)}
          >
            <AccordionItem value="item-about">
              <AccordionTrigger className="about-stack-header hover:no-underline">
                Who am I?
              </AccordionTrigger>
              <AccordionContent className="about-p">
                <p>{personalInfo.about1}</p>
                <br />
                <p>{personalInfo.about2}</p>
                <br />
                <p>{personalInfo.about3}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-wdd">
              <AccordionTrigger className="about-stack-header">
                Website Development & Design
              </AccordionTrigger>
              <AccordionContent className=" about-p">
                {wdd.map((pkg, index) => (
                  <div key={index} className="pb-4">
                    <h3 className="about-p-title">{pkg.title}</h3>
                    <p>{pkg.about}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-seo">
              <AccordionTrigger className="about-stack-header">
                SEO
              </AccordionTrigger>
              <AccordionContent className=" about-p">
                {seo.map((pkg, index) => (
                  <div key={index} className="pb-4">
                    <h3 className="about-p-title">{pkg.title}</h3>
                    <p>{pkg.about}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-tools">
              <AccordionTrigger className="about-stack-header">
                My Tools
              </AccordionTrigger>
              <AccordionContent className="about-p">
                {topPackages.map((pkg, index) => (
                  <div key={index} className="pb-4">
                    <h3 className="about-p-title">{pkg.title}</h3>
                    <p>{pkg.about}</p>
                    <a href={pkg.link} className="hover:underline">
                      {pkg.link}
                    </a>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="col-span-2 relative mx-auto hidden md:block">
          <Image
            src={imgURL}
            alt="Background Image"
            width={350}
            height={400}
            // className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
