import { Suspense } from "react";
import Forecast from "../components/forecast/forecast";

import { Text } from "../components/ui/text";

export default function ForecastPage() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Forecast />
    </Suspense>
  );
}
