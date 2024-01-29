import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const textClassName = recipe({
  base: {
    fontSize: 12,
  },

  variants: {
    size: {
      small: { fontSize: 12 },
      medium: { fontSize: 16 },
      large: { fontSize: 24 },
    },
    color: {
      neutral: { color: "" },
    },
  },
});

export type textVariants = RecipeVariants<typeof textClassName>;
