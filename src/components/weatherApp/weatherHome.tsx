"use client";

import { useEffect, useRef, useState } from "react";
import { WeatherCard } from "./weatherCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="pt-12">
      <div className="w-1/4 m-auto">
        <Card className="bg-gray-600">
          <CardContent className="pt-4">
            <form onSubmit={formSubmitHandler}>
              <div className="grid w-full items-center m-auto gap-2">
                <Label htmlFor="city" className="description">
                  City:
                </Label>
                <Input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  ref={cityInputRef}
                  className="weather-temp placeholder:text-gray-400"
                />
              </div>
              <div className="text-center pt-2">
                <Button className="bg-gray-900">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {typeof data.main != "undefined" ? (
        <div className="w-1/2 m-auto pt-8">
          <WeatherCard weatherData={data} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
