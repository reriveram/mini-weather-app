import { useEffect, useState } from "react";
import { LocationType } from "../types";

const useLocations = (input: string) => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error["message"]>();

  const limit = 5;
  const locationsEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=${limit}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`;

  useEffect(() => {
    const controller = new AbortController();
    async function getLocations() {
      try {
        setIsLoading(true);
        const res = await fetch(locationsEndpoint, { signal: controller.signal });
        if (!res.ok) {
          throw new Error("Something went wrong with fetching locations");
        }
        const data = await res.json();
        setLocations(data);
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
    if (input != "") {
      getLocations();
    }

    return () => {
      controller.abort();
    };
  }, [locationsEndpoint, input]);

  return {
    locations,
    isLoading,
    error,
  };
};

export default useLocations;
