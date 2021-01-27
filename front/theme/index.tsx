import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { dark, light } from "./palette";
import typography from "./typography";

let darkTheme = createMuiTheme({
  palette: { ...dark },
  // @ts-ignore
  typography,
});
darkTheme = responsiveFontSizes(darkTheme, { factor: 2 });

let lightTheme = createMuiTheme({
  palette: { ...light },
  // @ts-ignore
  typography,
});
lightTheme = responsiveFontSizes(lightTheme, { factor: 2 });

export { lightTheme, darkTheme };
