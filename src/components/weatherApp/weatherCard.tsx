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
import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdOutlineWaterDrop, MdOutlineRemoveRedEye } from "react-icons/md";
import { PiWindLight } from "react-icons/pi";
import { WiBarometer } from "react-icons/wi";

interface WeatherCardProps {
  weatherData: any;
}

const CountryConvert = (countryCode: string) => {
  let countryString = "";
  if (countryCode === "US") {
    countryString = "United States";
  } else if (countryCode === "CA") {
    countryString = "Canada";
  } else if (countryCode === "GB") {
    countryString = "United Kingdom";
  } else if (countryCode === "AU") {
    countryString = "Australia";
  } else if (countryCode === "NZ") {
    countryString = "New Zealand";
  } else if (countryCode === "IE") {
    countryString = "Ireland";
  } else if (countryCode === "DE") {
    countryString = "Germany";
  } else if (countryCode === "FR") {
    countryString = "France";
  } else if (countryCode === "IT") {
    countryString = "Italy";
  } else if (countryCode === "ES") {
    countryString = "Spain";
  } else if (countryCode === "CH") {
    countryString = "Switzerland";
  } else if (countryCode === "AT") {
    countryString = "Austria";
  } else {
    countryString = countryCode;
  }

  return countryString;
};

const degToCompass = (deg: number) => {
  let compassDirection = "";
  if (337.5 <= deg || deg <= 22.5) {
    compassDirection = "N";
  } else if (22.5 < deg && deg < 67.5) {
    compassDirection = "NE";
  } else if (67.5 < deg && deg < 112.5) {
    compassDirection = "E";
  } else if (112.5 < deg && deg < 157.5) {
    compassDirection = "SE";
  } else if (157.5 < deg && deg < 202.5) {
    compassDirection = "S";
  } else if (202.5 < deg && deg < 247.5) {
    compassDirection = "SW";
  } else if (247.5 < deg && deg < 292.5) {
    compassDirection = "W";
  } else if (292.5 < deg && deg < 337.5) {
    compassDirection = "NW";
  }

  return compassDirection;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => (
  <Card className="bg-gray-600">
    <CardHeader>
      <CardTitle className="text-center">
        <p className="weather-header">{weatherData.name}</p>
      </CardTitle>
      <CardDescription className="text-center weather-subheader">
        <p className="weather-subheader pb-2">
          {CountryConvert(weatherData.sys.country)}
        </p>
        {moment().format("dddd")}, <span>{moment().format("LL")}</span>
      </CardDescription>
    </CardHeader>
    <CardContent className="">
      <Avatar className="w-20 h-20 m-auto">
        <AvatarImage
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
        <AvatarFallback>
          {weatherData.weather[0].main.slice(0, 2).toLocaleUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="weather-temp-main text-center">
          {weatherData.main.temp.toFixed(0)}&deg;F
        </p>
        <p className="description my-auto text-center">
          {weatherData.weather[0].main}
        </p>
        <p className="weather-temp my-auto text-center">
          Feles Like: {weatherData.main.feels_like.toFixed(0)}&deg;F
        </p>
        <div>
          <h3 className="weather-details my-2">Details</h3>
          <div className="flex justify-between">
            <p className="weather-temp flex m-auto">
              <PiWindLight className="h-4 w-4 md:h-6 md:w-6 mr-1" /> Wind:{" "}
              {weatherData.wind.speed.toFixed(0)} mi/h{" "}
              {degToCompass(weatherData.wind.deg)}
            </p>
            <p className="weather-temp flex m-auto">
              <MdOutlineWaterDrop className="h-4 w-4 md:h-6 md:w-6 mr-1" />{" "}
              Humidity: {weatherData.main.humidity}%
            </p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <p className="weather-temp flex m-auto">
              <WiBarometer className="h-4 w-4 md:h-6 md:w-6 mr-1" /> Pressure:{" "}
              {(weatherData.main.pressure * 0.0009869233).toFixed(4)} atm
            </p>
            <p className="weather-temp flex m-auto">
              <MdOutlineRemoveRedEye className="h-4 w-4 md:h-6 md:w-6 mr-1" />{" "}
              Visibility: {(weatherData.visibility / 1000 / 1.609).toFixed(2)}mi
            </p>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between">
            <p className="weather-temp flex m-auto">
              <BsSunrise className="h-4 w-4 md:h-6 md:w-6 mr-1" /> Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-US"
              )}
            </p>
            <p className="weather-temp flex m-auto">
              <BsSunset className="h-4 w-4 md:h-6 md:w-6 mr-1" /> Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-US"
              )}
            </p>
          </div>
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
