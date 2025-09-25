"use client";

import React, { useState } from "react";
import { FaBriefcase, FaChartColumn, FaFingerprint } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView } from "@/utils/useInView";

export const TripleP: React.FC = () => {
  const [displayP, setDisplayP] = useState("");
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  const descriptions = {
    Professional:
      "I strive to deliver sleek, modern websites that are both visually stunning and highly functional. My expertise ensures your online presence is reliable, secure, and built to the highest industry standards.",
    Personalized:
      "I will take the time to understand your unique business goals and target audience. My custom solutions are crafted to reflect your brand's identity and provide a one-of-a-kind user experience.",
    Performance:
      "I build high-speed websites that provide a seamless user experience across all devices. My focus on optimization ensures your site loads quickly and performs flawlessly, keeping your visitors engaged.",
  };

  return (
    <div className=" pb-16 bg-tertiary-300 pt-24 px-12">
      <div ref={ref} className={`${isInView ? "in-view" : ""}`}>
        <h1 className="text-center about-header animated-child">
          What Comes With Every Project
        </h1>
        <div className="min-h-[140px] flex items-center justify-center">
          <p
            className={`three-p-p text-center transition-opacity duration-500 ease-in-out px-32 ${
              displayP ? "opacity-100" : "opacity-0"
            }`}
          >
            {descriptions[displayP as keyof typeof descriptions] || ""}
          </p>
        </div>
        <div className="text-center w-full grid lg:grid-cols-3 grid-cols-1 gap-8 py-4">
          <Card
            className="border-2 hover:border-primary hover:text-primary animated-child-right delay-2"
            onMouseEnter={() => setDisplayP("Professional")}
            onMouseLeave={() => setDisplayP("")}
          >
            <CardHeader>
              <CardTitle>
                <FaBriefcase className="h-14 w-14 m-auto text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="three-p-card-title">Professional</p>
            </CardContent>
          </Card>
          <Card
            className="border-2 hover:border-primary hover:text-primary animated-child-right delay-3"
            onMouseEnter={() => setDisplayP("Personalized")}
            onMouseLeave={() => setDisplayP("")}
          >
            <CardHeader>
              <CardTitle>
                <FaFingerprint className="h-14 w-14 m-auto text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="three-p-card-title">Personalized</p>
            </CardContent>
          </Card>
          <Card
            className="border-2 hover:border-primary hover:text-primary animated-child-right delay-4"
            onMouseEnter={() => setDisplayP("Performance")}
            onMouseLeave={() => setDisplayP("")}
          >
            <CardHeader>
              <CardTitle>
                <FaChartColumn className="h-14 w-14 m-auto text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="three-p-card-title">Performance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
