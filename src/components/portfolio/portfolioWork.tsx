"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioDetails } from "@/utils/siteData";
import Link from "next/link";

export default function PortfolioWork() {
  return (
    <div className="bg-tertiary-300 py-10">
      <div>
        <h1 className="home-section-p-header text-center py-2">
          Our Portfolio
        </h1>
        <p className="home-section-subheader text-center py-2">
          Check Out Our Previous Work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-12 gap-4">
        {portfolioDetails.map((work, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{work.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>
                <Link href={work.url} target="_blank">
                  View
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>{work.details}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
