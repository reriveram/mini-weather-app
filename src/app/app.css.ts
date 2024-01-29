import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles/sprinkles.css";

export const layout = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    marginX: { mobile: 32, tablet: 72, desktop: 290 },
    marginY: { mobile: 32, tablet: 64, desktop: 80 },
  }),
  {
    minHeight: "100vh",
  },
]);
