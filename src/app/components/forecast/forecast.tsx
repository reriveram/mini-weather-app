"use client";
import { useSearchParams } from "next/navigation";
import { Text } from "../ui/text";
import { WeatherIcon } from "../icon";
import { useForecast } from "../../hooks";

import {
  currentDay,
  currentTemp,
  forecastContainer,
  forecastTitle,
  headerContainer,
  currentDayContainer,
  currentDayTextContainer,
  forecastLocation,
} from "../../forecast/page.css";
import { WeekForecast } from ".";

export default function Forecast() {
  const searchParams = useSearchParams();
  const lat = Number(searchParams.get("lat"));
  const lon = Number(searchParams.get("lon"));
  const city = searchParams.get("city");
  const country = searchParams.get("country");

  const { forecast, isLoading, error } = useForecast({ lat, lon });

  const { current, daily } = forecast ?? {};

  const weekForecast = daily?.slice(1, 6);

  if (isLoading) return <Text>Loading...</Text>;

  if (error)
    return (
      <div>
        <Text>Oops, looks like there&apos;s been an error!</Text>
        <Text>Try reloading te page</Text>
      </div>
    );

  return (
    <section className={forecastContainer}>
      <header className={headerContainer}>
        <Text className={forecastTitle}>5 day forecast</Text>
        <Text className={forecastLocation}>{`${city}, ${country}`}</Text>
      </header>
      <article className={currentDayContainer}>
        <div className={currentDayTextContainer}>
          <Text className={currentDay}>Today</Text>
          <Text className={currentTemp}>{`${current?.temp}º F`}</Text>
        </div>
        <WeatherIcon weather={current?.weather[0].main} />
      </article>
      {weekForecast && <WeekForecast weekForecast={weekForecast} />}
    </section>
  );
}
