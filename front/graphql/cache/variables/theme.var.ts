import { makeVar } from "@apollo/client";
import { initTheme } from "../../../theme/switchTheme";

export const themeVar = makeVar(initTheme);

export const theme = {
  read: () => themeVar(),
};
