import { sprinkles } from "@/app/sprinkles/sprinkles.css";

import { style } from "@vanilla-extract/css";

export const comboboxContainer = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: { mobile: 290, tablet: "full" },
  }),
]);

export const homeInput = style([
  sprinkles({
    borderColor: "border",
    borderRadius: 24,
    padding: 24,
    fontSize: 20,
    height: 2,
    width: "full",
  }),
  { "::placeholder": { fontSize: 20 }, border: "2px", borderStyle: "solid" },
]);

export const homeInputExpanded = style([
  sprinkles({
    borderRadius: 24,
    padding: 24,
    fontSize: 20,
    height: 2,
    width: "full",
    borderColor: "border",
  }),
  {
    "::placeholder": { fontSize: 20 },
    borderWidth: 2,
    borderStyle: "solid",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "white",
  },
]);

export const locationList = style([
  sprinkles({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "start",
    justifyContent: "flex-end",
    width: "full",
    paddingY: 0,
    borderColor: "border",
  }),
  {
    borderWidth: 2,
    borderStyle: "solid",
    borderTop: "none",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
]);
