"use client";
import { Text } from "../ui/text";

import { forecastContainer } from "../../forecast/page.css";

export default function ForecastSkeleton() {
  return (
    <section className={forecastContainer}>
      <Text>Loading...</Text>
    </section>
  );
}
