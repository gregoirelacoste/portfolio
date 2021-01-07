import palette from "./palette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

export const style = {
  a: {
    color: palette.primary.main,
    textDecoration: "none",
    fontSize: "1.2rem",
    fontFamily: "Rubik Mono One",
    transition: "0.7s",
    "&:hover": {
      color: palette.secondary.main,
    },
  },
};

const typography = {
  fontFamily: "Raleway, sans serif",
  h1: {
    fontSize: "6rem",
    fontFamily: "Rubik Mono One",
  },
  h2: { fontSize: "5rem", fontFamily: "Rubik Mono One" },
  h3: { fontSize: "4rem", color: palette.secondary.main },
  h4: { fontSize: "1.2rem", fontFamily: "Rubik Mono One" },
  body1: { fontSize: "1.2rem", color: "white" },
};
export default typography;
