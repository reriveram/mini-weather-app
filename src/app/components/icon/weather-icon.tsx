import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { weatherIconStyle } from "./weather-icon.css";
import { ReactElement } from "react";
import { Text } from "../ui/text";

interface WeatherIconProps {
  weather: string | undefined;
}

const weatherDict: { [key: string]: ReactElement } = {
  Sun: <FontAwesomeIcon className={weatherIconStyle} icon={faSun} />,
  Rain: <FontAwesomeIcon className={weatherIconStyle} icon={faCloudRain} />,
  Clouds: <FontAwesomeIcon className={weatherIconStyle} icon={faCloud} />,
  Storm: <FontAwesomeIcon className={weatherIconStyle} icon={faCloudBolt} />,
};

export default function WeatherIcon({ weather }: WeatherIconProps) {
  if (!weather) {
    return <Text>No weather to display</Text>;
  }
  return weatherDict[weather];
}
