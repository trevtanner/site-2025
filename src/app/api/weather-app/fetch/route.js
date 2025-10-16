import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    console.error("OpenWeatherMap API key is missing.");
    return NextResponse.json(
      { message: "Server configuration error: API key is missing." },
      { status: 500 }
    );
  }

  let externalApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${apiKey}`;

  if (city) {
    externalApiUrl += `&q=${city}`;
  } else if (lat && lon) {
    externalApiUrl += `&lat=${lat}&lon=${lon}`;
  } else {
    return NextResponse.json(
      { message: "City or coordinates must be provided." },
      { status: 400 }
    );
  }

  try {
    const apiResponse = await fetch(externalApiUrl, {
      next: { revalidate: 600 },
    });
    const data = await apiResponse.json();

    return NextResponse.json(data, { status: apiResponse.status });
  } catch (error) {
    console.error("API Route fetch error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
