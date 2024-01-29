import { ReactElement } from "react";
import { Text } from "../ui/text";
import SunIcon from "./sun";

import CloudIcon from "./cloud";
import StormIcon from "./storm";
import RainIcon from "./rain";

interface WeatherIconProps {
  weather: string | undefined;
}

const weatherDict: { [key: string]: ReactElement } = {
  Sun: <SunIcon />,
  Rain: <RainIcon />,
  Clouds: <CloudIcon />,
  Storm: <StormIcon />,
};

export default function WeatherIcon({ weather }: WeatherIconProps) {
  if (!weather) {
    return <Text>No weather to display</Text>;
  }
  return weatherDict[weather];
}
