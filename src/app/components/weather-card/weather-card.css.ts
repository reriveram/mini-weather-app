import { sprinkles } from "@/app/sprinkles/sprinkles.css";
import { vars } from "@/app/themes/themes.css";
import { style } from "@vanilla-extract/css";

export const weatherCard = style([
  sprinkles({
    display: "flex",
    flexDirection: { mobile: "row", tablet: "row", desktop: "column" },
    alignItems: "center",
    justifyContent: { mobile: "space-around", tablet: "space-around" },
    width: "full",
    backgroundColor: "secondary",
    borderRadius: 10,
    paddingY: { mobile: 20, tablet: 32, desktop: 32 },
    paddingX: 10,
    gap: { mobile: 40, desktop: 80 },
  }),
  { border: "2px", borderColor: "black", borderStyle: "solid" },
]);

export const infoText = style([
  sprinkles({
    textStyle: {
      mobile: "subheading",
      tablet: "subheadingTablet",
      desktop: "subheadingDesktop",
    },
    width: { mobile: 48, tablet: 80, desktop: "auto" },
  }),
  {},
]);

export const weather = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  {},
]);
