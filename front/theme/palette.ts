declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const palette = {
  primary: { main: "#fff", light: "#aeaeae", dark: "#121212" },
  secondary: { main: "#00b8de", light: "#bae8f1", dark: "#04434f" },
  neutral: {
    main: "#000",
  },
  common: { black: "#121212", white: "#fff" },
};
export default palette;
