import React from "react";
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

interface WeatherCardProps {
  weatherData: any;
}

export const WeatherCardSkeleton: React.FC<WeatherCardProps> = ({
  weatherData,
}) => (
  <Card className="bg-gray-400">
    <CardHeader>
      <CardTitle className="text-center">
        <Skeleton className="h-8 w-1/6 m-auto" />
      </CardTitle>
      <CardDescription className="text-center weather-subheader">
        <div className="weather-subheader pb-2">
          <Skeleton className="h-4 w-1/6 m-auto" />
        </div>
        <Skeleton className="h-4 w-1/4 m-auto" />
      </CardDescription>
    </CardHeader>
    <CardContent className="">
      <Skeleton className="h-16 w-16 rounded-full m-auto mb-2" />
      <div>
        <div className="weather-temp-main text-center pb-2">
          <Skeleton className="h-10 w-1/6 m-auto" />
        </div>
        <div className="description my-auto text-center pb-2">
          <Skeleton className="h-4 w-1/12 m-auto" />
        </div>
        <div className="weather-temp my-auto text-center pb-2">
          <Skeleton className="h-4 w-1/5 m-auto" />
        </div>
        <div>
          <h3 className="weather-details my-2 pb-2">
            <Skeleton className="h-6 w-1/6" />
          </h3>
          <div className="flex justify-between gap-4">
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between gap-4">
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between gap-4">
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
            <div className="weather-temp w-1/2">
              <Skeleton className="h-4 w-1/2 m-auto" />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="pt-4">
      <div className="weather-footer w-1/3">
        <Skeleton className="h-4 w-full" />
      </div>
    </CardFooter>
  </Card>
);
