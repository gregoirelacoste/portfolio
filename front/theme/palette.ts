declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const dark = {
  primary: { main: "#fff", light: "#aeaeae", dark: "#282728" },
  secondary: { main: "#00b8de", light: "#bae8f1", dark: "#04434f" },
  neutral: {
    main: "#000",
    dark: "#18181a",
  },
  common: { black: "#121212", white: "#fff" },
};

const light = {
  primary: { main: "#00b8de", light: "#bae8f1", dark: "#04434f" },
  secondary: { main: "#fff", light: "#aeaeae", dark: "#282728" },
  neutral: {
    main: "#000",
    dark: "#18181a",
  },
  common: { black: "#121212", white: "#fff" },
};

const pink = {
  primary: { main: "#e23bbe", light: "#d1addd", dark: "#4a055d" },
  secondary: { main: "#fff", light: "#aeaeae", dark: "#282728" },
  neutral: {
    main: "#000",
    dark: "#18181a",
  },
  common: { black: "#121212", white: "#fff" },
};

export { dark, light, pink };
