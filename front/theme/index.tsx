import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

let theme = createMuiTheme({
  palette,
  // @ts-ignore
  typography,
});
theme = responsiveFontSizes(theme, { factor: 2 });

export default theme;
