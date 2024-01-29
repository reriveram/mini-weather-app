import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/sprinkles.css";

export const forecastContainer = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "full",
  }),
  {},
]);

export const headerContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "start",
    width: "full",
    gap: 8,
  }),
]);

export const forecastTitle = style([
  sprinkles({
    textStyle: {
      mobile: "heading",
      tablet: "headingTablet",
      desktop: "headingDesktop",
    },
  }),
  {},
]);

export const forecastLocation = style([
  sprinkles({
    textStyle: {
      mobile: "heading",
      tablet: "headingTablet",
      desktop: "headingDesktop",
    },
  }),
  {},
]);

export const currentDayContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "full",
    gap: { mobile: 10, tablet: 14, desktop: 20 },
  }),
]);

export const currentDayTextContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "end",
    width: "full",
    gap: 8,
  }),
]);

export const currentDay = style([
  sprinkles({
    textStyle: {
      mobile: "heading",
      tablet: "headingTablet",
      desktop: "headingDesktop",
    },
  }),
  {},
]);

export const currentTemp = style([
  sprinkles({
    textStyle: {
      mobile: "heading",
      tablet: "headingTablet",
      desktop: "headingDesktop",
    },
  }),
  {},
]);

export const weatherCardsList = style([
  sprinkles({
    display: "flex",
    flexDirection: { mobile: "column", tablet: "column", desktop: "row" },
    width: "full",
    alignItems: "center",
    marginTop: 48,
    gap: { mobile: 20, tablet: 32, desktop: 20 },
  }),
]);
