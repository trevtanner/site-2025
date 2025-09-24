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

export const Contact: React.FC = () => {
  return (
    <div className=" pb-32 bg-tertiary-100">
      <div className="grid md:grid-cols-12 grid-cols-1 px-12">
        <div className="col-span-8 pt-24">
          <h1 className="text-center about-header pb-2">Tireless Work</h1>
          <p className="contact-p text-center py-4">
            I will work day and night to get the product created that you want
            and fits your needs.
            <br /> Always built to your specifications and paired with unrivaled
            support.
          </p>
          <div className="text-center w-full">
            <Button className="mt-4 bg-primary portfolio-text" size="lg">
              <MdSend className="" /> Send an Email
            </Button>
          </div>
        </div>
        <div className="col-span-4 pt-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>How Can I Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Phone</Label>
                    <Input
                      id="name"
                      type="phone"
                      placeholder="Enter Your Phone"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Company</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter Your Company"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Comments</Label>
                    <Textarea placeholder="Any additional comments" rows={5} />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="mt-4 bg-primary portfolio-text w-1/3" >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
