export type LocationType = {
  name: string;
  state: string;
  country: string;
  lat: string;
  lon: string;
};

export type ForecasteType = {
  current: {
    temp: number;
    weather: { main: string }[];
  };
  daily: { dt: number; temp: { day: number }; weather: { main: string }[] }[];
};
