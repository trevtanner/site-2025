"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/utils/useInView";
import { FaGripLines } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BasicQuestionForm } from "../forms/basicQuestionForm";

export const ContactFormComponent: React.FC = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const [formDisplay, setFormDisplay] = useState({
    active: false,
    type: "",
  });

  function sendEmail() {
    const recipient = "contactus@trevorstanner.com";
    const subject = "A Simple Request";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  }

  return (
    <div className="py-12 bg-tertiary-100">
      <div ref={ref} className={`${isInView ? "in-view" : ""} md:px-20 px-4`}>
        <div>
          <h1 className="home-section-subheader text-center py-2 flex justify-center gap-2 text-primary animated-child">
            <FaGripLines className="my-auto" /> Get In Touch
            <FaGripLines className="my-auto" />
          </h1>
        </div>
        <div className="animated-child delay-2 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="border-2 animated-child-right delay-2 text-center">
            <CardHeader>
              <CardTitle className="home-section-subheader">
                Technical question or inquiry?
              </CardTitle>
              <CardDescription className="privacy-section-p">
                Best for new client question or general question about my work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="mt-4 contact-button-2 hover:cursor-pointer hover:bg-tertiary-500"
                size="sm"
                onClick={() => setFormDisplay({ active: true, type: "basic" })}
              >
                Fill out a Form
              </Button>
            </CardContent>
          </Card>
          <Card className="border-2 animated-child-right delay-2 text-center">
            <CardHeader>
              <CardTitle className="home-section-subheader">
                Something simpler?
              </CardTitle>
              <CardDescription className="privacy-section-p">
                Send me a email, and I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="mt-4 contact-button-1 hover:cursor-pointer"
                size="sm"
                onClick={sendEmail}
              >
                E-mail
              </Button>
            </CardContent>
          </Card>
        </div>
        {formDisplay.active && formDisplay.type === "basic" && (
          <div className={`animated-child w-2/3 mx-auto`}>
            <BasicQuestionForm />
          </div>
        )}
      </div>
    </div>
  );
};
