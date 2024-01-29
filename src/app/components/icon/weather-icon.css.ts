import { sprinkles } from "@/app/sprinkles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const weatherIconStyle = style([
  sprinkles({
    width: { mobile: 40, tablet: 64, desktop: 80 },
    height: { mobile: 40, tablet: 64, desktop: 80 },
  }),
]);
