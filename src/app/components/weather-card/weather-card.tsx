import { WeatherIcon } from "../icon";
import { Text } from "../ui/text";
import { getWeekDay } from "@/app/utils/data-format";
import { infoText, weatherCard } from "./weather-card.css";

interface WeatherCardProps {
  timestamp: number;
  weather: string;
  temperature: number;
}

export default function WeatherCard({
  timestamp,
  weather,
  temperature,
}: WeatherCardProps) {
  return (
    <div className={weatherCard}>
      <Text className={infoText}>{getWeekDay(timestamp)}</Text>
      <WeatherIcon weather={weather} />
      <Text className={infoText}>{Math.trunc(temperature)}º F</Text>
    </div>
  );
}
