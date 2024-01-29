import { sprinkles } from "@/app/sprinkles/sprinkles.css";
import { vars } from "@/app/themes/themes.css";
import { style } from "@vanilla-extract/css";

export const item = style([
  sprinkles({
    textStyle: "option",
    color: "text",
    borderBottom: "light",
    paddingX: 24,
    paddingY: 14,
  }),
  {
    width: "100%",
    ":last-child": { border: "none" },
    ":hover": { background: "#4681ca", cursor: "pointer", color: "#FFFFFF" },
  },
]);

// export const linkStyle = style([
//   sprinkles({
//     width: "full",
//   }),
//   { width: "100%", height: "100%" },
// ]);
