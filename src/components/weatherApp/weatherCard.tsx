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

import { BsSunrise, BsSunset, BsThermometerSun } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";

interface WeatherCardProps {
  weatherData: any;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => (
  <Card className="bg-gray-800">
    <CardHeader>
      <CardTitle className="weather-header">
        {weatherData.name}, {weatherData.sys.country}
      </CardTitle>
      <CardDescription>
        {moment().format("dddd")}, <span>{moment().format("LL")}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="bg-gray-500 pt-4">
      <div>
        <div className="description flex">
          <p className="description my-auto">{weatherData.weather[0].main}</p>
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <AvatarFallback>
              {weatherData.weather[0].main.slice(0, 2).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex justify-between">
          <p className="weather-temp flex">
            <BsThermometerSun className="m-auto h-6 w-6 mr-2" /> Temperature:{" "}
            {weatherData.main.temp} &deg;F
          </p>
          <p className="weather-temp flex">
            <MdOutlineWaterDrop className="m-auto h-6 w-6 mr-1" /> Humidity:{" "}
            {weatherData.main.humidity} %
          </p>
        </div>

        <div className="flex justify-between">
          <p className="weather-temp flex">
            <BsSunrise className="m-auto h-6 w-6 mr-2" /> Sunrise:
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-US"
            )}
          </p>
          <p className="weather-temp flex">
            <BsSunset className="m-auto h-6 w-6 mr-2" /> Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-US"
            )}
          </p>
        </div>
      </div>
    </CardContent>
    <CardFooter className="pt-4">
      <p className="weather-footer">
        Note: Sunrise / Sunset times are the users local time
      </p>
    </CardFooter>
  </Card>
);
