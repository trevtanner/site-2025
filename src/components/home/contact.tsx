"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdSend, MdOutlineFileDownload } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import Image from "next/image";
import ttLogoWhite from "@/public/TTlogo.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useInView } from "@/utils/useInView";
import Link from "next/link";
import { ContactForm } from "../forms/contactForm";

export const Contact: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const getAnimatedClass = (delayClass = "") =>
    `animated-child ${isInView ? "in-view" : ""} ${delayClass}`;

  return (
    <div className="py-12 bg-tertiary-100">
      <div
        ref={ref}
        className={`${
          isInView ? "in-view" : ""
        } grid md:grid-cols-12 grid-cols-1 md:px-20 px-4`}
      >
        <div
          className={`animated-child delay-1 col-span-6 md:pt-24 pb-8 md:pb-0`}
        >
          {/* This div appears first */}
          <h1 className="text-center home-section-header pb-2">
            Tireless Work
          </h1>
          <p className="home-section-p-2 py-4 pb-12 text-center">
            I will work day and night to get the product created that you want
            and fits your needs. Always built to your specifications with
            unrivaled support.
          </p>
          <p className="home-section-p-2 text-center py-4">
            Click below to send me an email or fill out the form to the right. I
            will get back to you as soon as possible to convert your ideas for a
            site into reality.
          </p>
          <div className="text-center w-full">
            <Button className="mt-4 project-button" size="lg" asChild>
              <Link href="mailto:contactus@trevorstanner.com">
                <MdSend className="" /> Send an Email
              </Link>
            </Button>
          </div>
        </div>
        <div className={`animated-child delay-2 col-span-6`}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
