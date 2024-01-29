import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  border: 0,
  lineHeight: 1.5,
  boxSizing: "border-box",
});

globalStyle("a, button", {
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
});

globalStyle("ul, li", {
  listStyle: "none",
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
});
