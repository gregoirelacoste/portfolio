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
    fontSize: "99px",
    fontFamily: "Rubik Mono One",
  },
  h2: { fontSize: "75px", fontFamily: "Rubik Mono One" },
  h3: { fontSize: "60px", color: palette.secondary.main },
  h4: { fontSize: "1.2rem", fontFamily: "Rubik Mono One" },
  body1: { fontSize: "20px", color: "white" },
};
export default typography;
