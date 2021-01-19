import palette from "./palette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const headerTypo = "Lato, sans-serif";
const mainTypo = "Raleway, sans serif";

export const style = {
  a: {
    color: palette.primary.main,
    textDecoration: "none",
    fontSize: "1.2rem",
    fontFamily: headerTypo,
    transition: "0.7s",
    "&:active": {
      color: palette.secondary.main,
      "&:hover": {
        color: palette.primary.main,
      },
    },
    "&:hover": {
      color: palette.secondary.main,
    },
  },
  active: {
    color: palette.secondary.main,
    "&:hover": {
      color: palette.primary.main,
    },
  },
};

const typography = {
  fontFamily: mainTypo,
  h1: {
    fontSize: "5rem",
    fontFamily: headerTypo,
    textTransform: "uppercase",
    fontWeight: 100,
    marginBottom: "2rem",
  },
  h2: {
    fontSize: "3.5rem",
    fontFamily: headerTypo,
    textTransform: "uppercase",
    fontWeight: 800,
    marginBottom: "1.5rem",
  },
  h3: {
    fontSize: "3.5rem",
    color: palette.secondary.main,
    fontFamily: headerTypo,
    fontWeight: 100,
  },
  h4: {
    fontSize: "1.2rem",
    fontFamily: headerTypo,
    textTransform: "uppercase",
    fontWeight: 800,
  },
  body1: { fontSize: "1.2rem", color: "white" },
};
export default typography;
