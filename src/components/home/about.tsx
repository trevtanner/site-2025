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
import { useInView } from "@/utils/useInView";

const About: React.FC = () => {
  const [displayedImg, setDisplayedImg] = useState("item-about");
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

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
    <div className={`pt-12 pb-12 bg-tertiary-100 px-8 `}>
      <div ref={ref} className={`${isInView ? "in-view" : ""}`}>
        <h1 className="text-center md:text-left home-section-header pb-4 md:px-12 animated-child">
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-4">
            <Accordion
              type="single"
              className="w-3/4 m-auto animated-child"
              defaultValue="item-about"
              onValueChange={(e) => setDisplayedImg(e)}
            >
              <AccordionItem
                value="item-about"
                className="animate-fade-in-up delay-400"
              >
                <AccordionTrigger className="home-section-subheader-2 hover:no-underline">
                  Who am I?
                </AccordionTrigger>
                <AccordionContent className="home-section-p-1 px-4 pt-4">
                  <p>{personalInfo.about1}</p>
                  <br />
                  <p>{personalInfo.about2}</p>
                  <br />
                  {/* <p>{personalInfo.about3}</p> */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-wdd">
                <AccordionTrigger className="home-section-subheader-2">
                  Website Development & Design
                </AccordionTrigger>
                <AccordionContent className="home-section-p-1 px-4 pt-4">
                  {wdd.map((pkg, index) => (
                    <div key={index} className="pb-4">
                      <h3 className="home-section-p-header">{pkg.title}</h3>
                      <p>{pkg.about}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-seo">
                <AccordionTrigger className="home-section-subheader-2">
                  SEO
                </AccordionTrigger>
                <AccordionContent className="home-section-p-1 px-4 pt-4">
                  {seo.map((pkg, index) => (
                    <div key={index} className="pb-4">
                      <h3 className="home-section-p-header">{pkg.title}</h3>
                      <p>{pkg.about}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-tools">
                <AccordionTrigger className="home-section-subheader-2">
                  My Tools
                </AccordionTrigger>
                <AccordionContent className="home-section-p-1 px-4 pt-4">
                  {topPackages.map((pkg, index) => (
                    <div key={index} className="pb-4">
                      <h3 className="home-section-p-header">{pkg.title}</h3>
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

          <div className="col-span-2 relative mx-auto hidden md:block animated-child delay-2">
            <Image
              src={imgURL}
              alt="Background Image"
              width={300}
              height={300}
              // className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
