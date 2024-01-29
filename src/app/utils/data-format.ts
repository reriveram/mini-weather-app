import { LocationType } from "../types";

export function getOptionFormat(location: LocationType) {
  return `${location.name}, ${location.state ? location?.state + ", " : ""}${
    location.country
  }`;
}

export function getWeekDay(dayAsNumber: number) {
  const milliseconds = dayAsNumber * 1000;
  const dateObject = new Date(milliseconds);

  const dayOfWeek = dateObject.getUTCDay();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[dayOfWeek];
}
