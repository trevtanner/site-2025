"use client";

import { useState, useCallback } from "react";
import { WeatherCard } from "./weatherCard";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BsFillCloudSunFill, BsSearch, BsGeoAlt } from "react-icons/bs";
import { WeatherCardSkeleton } from "./weatherCardSkeleton";

interface WeatherData {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number | string;
  message?: string;
}

interface WeatherHomeProps {}

interface CoordsState {
  latitude: number;
  longitude: number;
}

export const WeatherHome: React.FC<WeatherHomeProps> = ({}) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(false);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);

  const [city, setCity] = useState("");

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (city.trim()) {
      fetchWeather({ city });
    }
  };

  const fetchWeather = useCallback(
    async (params: { city?: string; coords?: CoordsState }) => {
      setIsLoadingData(true);
      setError(null);
      setData(null);

      try {
        const apiUrl = new URL(
          "/api/weather-app/fetch",
          window.location.origin
        );

        if (params.city) {
          apiUrl.searchParams.append("city", params.city);
        } else if (params.coords) {
          apiUrl.searchParams.append("lat", String(params.coords.latitude));
          apiUrl.searchParams.append("lon", String(params.coords.longitude));
        } else {
          throw new Error("City or coordinates must be provided.");
        }

        const response = await fetch(apiUrl.toString());
        const result: WeatherData = await response.json();

        if (!response.ok) {
          const errorText =
            result.message || `HTTP error! status: ${response.status}`;
          throw new Error(errorText);
        }
        setData(result);
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : "An unknown API error occurred.";
        console.error("API Fetch Error:", e);
        setError(`Failed to fetch data: ${errorMessage}`);
      } finally {
        setIsLoadingData(false);
      }
    },
    []
  );

  const requestLocation = useCallback(() => {
    setError(null);
    setCity("");

    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const locationCoords: CoordsState = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        fetchWeather({ coords: locationCoords });
        setIsLoadingLocation(false);
      },

      (err: GeolocationPositionError) => {
        console.error("Geolocation Error:", err);
        setError(err.message || "Location access denied or unavailable.");
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, [fetchWeather]);
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter City"
                  className="weather-temp placeholder:text-gray-400 md:w-2/3 bg-gray-400"
                />
                <div className="text-center">
                  <Button
                    size="icon"
                    className="rounded-full bg-gray-800"
                    aria-label="Submit Input Button"
                    type="submit"
                  >
                    <BsSearch />
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="w-full flex justify-center pt-2">
          <Button
            className="m-auto rounded-full bg-gray-800"
            onClick={requestLocation}
            disabled={isLoadingLocation || isLoadingData}
            aria-label="Use Current Location Button"
          >
            {isLoadingLocation ? (
              "Getting Location..."
            ) : (
              <>
                <BsGeoAlt /> Use Current Location
              </>
            )}
          </Button>
        </div>
      </div>
      {isLoadingData && (
        <div className="w-full md:w-2/3 m-auto py-8">
          <WeatherCardSkeleton weatherData={data} />
        </div>
      )}
      {error && (
        <div className="m-auto py-8 text-center text-red-500">{error}</div>
      )}
      {data && data.cod === "404" && (
        <div className="m-auto py-8 text-center text-red-500 capitalize">
          {data.message}
        </div>
      )}
      {data && data.cod === 200 ? (
        <div className="w-full md:w-2/3 m-auto py-8">
          <WeatherCard weatherData={data} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
