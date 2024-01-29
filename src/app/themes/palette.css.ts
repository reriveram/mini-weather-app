const colors = {
  danube50: "#f2f7fc;",
  danube100: "#e1eef8",
  danube200: "#cae2f3",
  danube300: "#a5d0eb",
  danube400: "#7ab6e0",
  danube500: "#5b9bd7",
  danube600: "#4681ca",
  danube700: "#3c6eb9",
  danube800: "#365a97",
  danube900: "#304d78",
  danube950: "#21314a",
  white: "#FFFFFF",
  black: "#000000",
  orange: "#fb9024",
};

export const sharedPalette = {
  primary: colors["danube600"],
  secondary: colors["danube200"],
  orange: colors["orange"],
};

export const lightPalette = {
  ...sharedPalette,
  background: colors["white"],
  color: colors["black"],
  border: colors["danube950"],
};

export const darkPalette = {
  ...sharedPalette,
  background: colors["black"],
  color: colors["white"],
  border: colors["danube200"],
};
