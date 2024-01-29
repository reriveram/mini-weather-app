import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "../themes/themes.css";
import { pxToRem } from "../utils/styles-utils";

const spaceInPixels = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112,
  152, 200, 290,
] as const;

const spaceInRem = Object.fromEntries(
  spaceInPixels.map((px) => [px, pxToRem(px)])
) as {
  [K in (typeof spaceInPixels)[Exclude<
    keyof typeof spaceInPixels,
    keyof []
  >]]: string;
};

const space = {
  full: "100%",
  auto: "auto",
  ...spaceInRem,
};

export const borders = {
  none: `none`,
  thin: `1px solid ${vars.colors.border}`,
  light: `1px solid ${vars.colors.border}`,
};

export const breakpoints = {
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1025px)",
};

const conditions = {
  mobile: {},
  tablet: { "@media": breakpoints.tablet },
  desktop: { "@media": breakpoints.desktop },
};

const typography = defineProperties({
  conditions,
  defaultCondition: "mobile",
  properties: {
    textStyle: {
      title: {
        fontSize: pxToRem(40),
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      tabletTitle: {
        fontSize: pxToRem(50),
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      desktopTitle: {
        fontSize: pxToRem(60),
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 0.5,
      },
      heading: {
        fontSize: pxToRem(20),
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 0.8,
      },
      headingTablet: {
        fontSize: pxToRem(24),
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 0.8,
      },
      headingDesktop: {
        fontSize: pxToRem(36),
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      subheading: {
        fontSize: pxToRem(20),
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      subheadingTablet: {
        fontSize: pxToRem(32),
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },
      subheadingDesktop: {
        fontSize: pxToRem(48),
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      },

      option: {
        fontSize: pxToRem(20),
        fontWeight: 100,
        letterSpacing: "-0.01em",
        lineHeight: 1,
        textDecoration: "none",
      },
      placeholder: {
        fontSize: pxToRem(16),
        fontWeight: 200,
        opacity: 2,
        letterSpacing: "-0.01em",
        lineHeight: 1.24,
      },
    },
    fontWeight: {
      regular: 400,
      bold: 600,
    },
    fontSize: {
      ...spaceInRem,
    },
    textAlign: { center: "center", start: "start", end: "end" },
  },
});

const spacing = defineProperties({
  conditions,
  defaultCondition: "mobile",
  properties: {
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    paddingBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,
    marginBottom: space,
    rowGap: space,
    columnGap: space,
    borderRadius: space,
    width: space,
    height: space,
    gap: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    gap: ["rowGap", "columnGap", "gap"],
  },
});

const layout = defineProperties({
  conditions,
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "flex", "grid"],
    flexDirection: ["row", "column"],
    alignItems: ["center", "end", "start"],
    flexWrap: ["wrap", "nowrap"],
    flex: {},
    minWidth: [0],
    minHeight: [0],
    maxHeight: ["100%", "100vh"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
});

const colors = defineProperties({
  properties: {
    backgroundColor: vars.colors,
    color: vars.colors,
    borderColor: vars.colors,
    fill: vars.colors,
    stroke: vars.colors,
    borderTop: borders,
    borderBottom: borders,
    borderLeft: borders,
  },
});

export const sprinkles = createSprinkles(typography, layout, spacing, colors);
