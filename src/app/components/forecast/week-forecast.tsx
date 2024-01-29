import { ForecasteType } from "@/app/types";
import WeatherCard from "../weather-card/weather-card";
import { v4 as uuid } from "uuid";
import { weatherCardsList } from "@/app/forecast/page.css";

interface WeekForecastProps {
  weekForecast: ForecasteType["daily"];
}

export default function WeekForecast({ weekForecast }: WeekForecastProps) {
  return (
    <ul className={weatherCardsList}>
      {weekForecast?.map((day) => (
        <WeatherCard
          key={uuid()}
          timestamp={day?.dt}
          weather={day?.weather[0].main}
          temperature={Math.trunc(day?.temp?.day)}
        />
      ))}
    </ul>
  );
}
