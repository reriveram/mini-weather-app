import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

import { sharedPalette, darkPalette, lightPalette } from "./palette.css";

const theme = {
  colors: {
    background: "#ffffff",
    primary: "#ffffff",
    secondary: "#ffffff",
    text: "#ffffff",
    border: "#ffffff",
    orange: "#ffffff",
  },
};

export const vars = createThemeContract(theme);

export const darkTheme = createGlobalTheme(":root", vars, {
  colors: {
    ...sharedPalette,
    background: darkPalette.background,
    text: darkPalette.color,
    border: darkPalette.border,
  },
});

export const lightTheme = createGlobalTheme(":root", vars, {
  colors: {
    ...sharedPalette,
    background: lightPalette.background,
    text: lightPalette.color,
    border: lightPalette.border,
  },
});
