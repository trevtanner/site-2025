"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { portfolioDetails } from "@/utils/siteData";
import Link from "next/link";
import { FaGripLines } from "react-icons/fa6";
import { useInView } from "@/utils/useInView";

export default function PortfolioWork() {
  const [ref, isInView] = useInView<HTMLDivElement>({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={`${isInView ? "in-view" : ""} bg-tertiary-300 py-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-12 gap-4">
        {portfolioDetails.map((work, index) => (
          <Card
            key={index}
            className={`animated-child portfolio-delay-${index}`}
          >
            <CardHeader>
              <CardTitle className="home-section-p-header">
                {work.name}
              </CardTitle>
              <CardAction>
                {work.url && (
                  <Link
                    href={work.url}
                    target={work.target}
                    className="hover:underline"
                  >
                    View
                  </Link>
                )}
              </CardAction>
            </CardHeader>
            <CardContent>
              <Link href={work.url} target={work.target}>
                <Image
                  src={work.image}
                  alt={work.name}
                  width={400}
                  height={400}
                  className="m-auto rounded-lg"
                  priority={true}
                />
              </Link>
            </CardContent>
            <CardFooter className="gap-2">
              {work.details.map((detail, index) => (
                <Button
                  size="sm"
                  className="portfolio-button hover:bg-primary"
                  key={index}
                >
                  {detail}
                </Button>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
