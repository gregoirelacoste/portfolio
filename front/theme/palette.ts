declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const palette = {
  primary: { main: "#fff", light: "#F2F8F7" },
  secondary: { main: "#5E5E5E", light: "#A6A6A6", dark: "#121212" },
  neutral: {
    main: "#000",
  },
  common: { black: "#121212", white: "#fff" },
};
export default palette;
