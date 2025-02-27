"use server";

import { WeatherHome } from "@/components/weatherApp/weatherHome";

export default async function WeatherApp() {
  return (
    <div className="min-h-[65.75vh]">
      <WeatherHome />
    </div>
  );
}
