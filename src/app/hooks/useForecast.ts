import { useEffect, useState } from "react";
import { ForecasteType } from "../types";

const useForecast = ({ lat, lon }: { lat: number; lon: number }) => {
  const [forecast, setForecast] = useState<ForecasteType | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error["message"]>();

  const exclude = "hourly,minutely,alerts";
  const units = "imperial";
  const forecastEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`;

  useEffect(() => {
    const controller = new AbortController();
    async function getForecast() {
      try {
        setIsLoading(true);
        const res = await fetch(forecastEndpoint, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong with fetching locations");
        }
        const data = await res.json();
        setForecast(data);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== "AbortError") {
            console.error(error.message as string);
            setError(error.message);
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (lat && lon) {
      getForecast();
    }

    return () => {
      controller.abort();
    };
  }, [forecastEndpoint, lat, lon]);

  return {
    forecast,
    isLoading,
    error,
  };
};

export default useForecast;
