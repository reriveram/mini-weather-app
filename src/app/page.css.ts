import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles/sprinkles.css";
import { vars } from "./themes/themes.css";

export const homeContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: { mobile: 32, tablet: 48, desktop: 56 },
    textAlign: "center",
  }),
]);

export const appIcon = style([
  sprinkles({
    width: { mobile: 96, tablet: 112, desktop: 152 },
    height: { mobile: 96, tablet: 112, desktop: 152 },
  }),
  { color: vars.colors.orange },
]);

export const homeTitle = style([
  sprinkles({
    textStyle: {
      mobile: "title",
      tablet: "tabletTitle",
      desktop: "desktopTitle",
    },
    margin: 0,
  }),
]);

export const homeHeading = style([
  sprinkles({
    textStyle: {
      mobile: "heading",
      tablet: "headingTablet",
      desktop: "headingDesktop",
    },
    margin: 0,
  }),
]);
