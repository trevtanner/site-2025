"use client";

import { useEffect, useRef, useState } from "react";
import { WeatherCard } from "./weatherCard";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BsFillCloudSunFill, BsSearch, BsGeoAlt } from "react-icons/bs";

interface WeatherHomeProps {}

export const WeatherHome: React.FC<WeatherHomeProps> = ({}) => {
  const [data, setData] = useState<any>([]);
  const [enteredCity, setEnteredCity] = useState("");
  const cityInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
      // });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${enteredCity}&units=imperial&APPID=511da6b9288c4ff19c0140c112ddf4a0`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [enteredCity]);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (cityInputRef.current) {
      const enteredValue = cityInputRef.current.value;
      setEnteredCity(enteredValue);
    }
  };

  return (
    <div className="pt-8">
      <div className="m-auto">
        <div className="flex items-center justify-center h-24 w-24 bg-gray-600 rounded-full m-auto">
          <BsFillCloudSunFill className="h-20 w-20 text-white pb-2" />
        </div>
        <h1 className="text-center weather-title pt-2">T-Cast</h1>
        <p className="text-center pb-2 italic weather-tag">
          Simple, clear weather for any city
        </p>
        <Card className="bg-gray-600 w-5/6 md:w-1/3 m-auto">
          <CardContent className="">
            <form onSubmit={formSubmitHandler}>
              <div className="w-full items-center m-auto gap-2 flex justify-center">
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  ref={cityInputRef}
                  className="weather-temp placeholder:text-gray-400 md:w-2/3"
                />
                <div className="text-center">
                  <Button size="icon" className="rounded-full bg-gray-800">
                    <BsSearch />
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
          <Button className="m-auto rounded-full bg-gray-800">
            <BsGeoAlt /> Use Current Location
          </Button>
        </Card>
      </div>
      {typeof data.main != "undefined" ? (
        <div className="w-5/6 md:w-1/2 m-auto py-8">
          <WeatherCard weatherData={data} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
