import { darkTheme, lightTheme, pinkTheme } from "./index";

export type ThemeType = "dark" | "light" | "pink";
export const themeType: {
  dark: ThemeType;
  light: ThemeType;
  pink: ThemeType;
} = {
  dark: "dark",
  light: "light",
  pink: "pink",
};
export const initTheme: { type: ThemeType } = {
  type: themeType.dark,
};

export type SetTheme = (themeState: { type: ThemeType }) => void;

export const getTheme = (type) => {
  switch (type) {
    case themeType.dark:
      return darkTheme;
    case themeType.light:
      return lightTheme;
    case themeType.pink:
      return pinkTheme;
    default:
      return darkTheme;
  }
};
