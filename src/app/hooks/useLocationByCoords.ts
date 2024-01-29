import { useEffect, useState } from "react";
import { ForecasteType } from "../types";

const useLocationByCoords = ({ lat, lon }: { lat: number; lon: number }) => {
  const [location, setLocation] = useState<ForecasteType | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error["message"]>();

  const limit = 5;
  const locationEndpoint = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid==dea62b41a3e114eccea1f351602f3b17`;

  useEffect(() => {
    const controller = new AbortController();
    async function getLocations() {
      try {
        setIsLoading(true);
        const res = await fetch(locationEndpoint, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong with fetching locations");
        }
        const data = await res.json();
        setLocation(data);
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
      getLocations();
    }

    return () => {
      controller.abort();
    };
  }, [locationEndpoint, lat, lon]);

  return {
    location,
    isLoading,
    error,
  };
};

export default useLocationByCoords;
