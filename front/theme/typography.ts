import palette from "./palette";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const typography = {
  fontFamily: "Raleway, sans serif",
  h1: {
    fontSize: "99px",
    fontFamily: "Rubik Mono One",
  },
  h2: { fontSize: "75px", fontFamily: "Rubik Mono One" },
  h3: { fontSize: "60px", color: palette.secondary.main },
  h4: { fontSize: "20px", fontFamily: "Rubik Mono One" },
  body1: { fontSize: "20px", color: "white" },
};
export default typography;
