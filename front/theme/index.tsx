import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";

let theme = createMuiTheme({
  palette,
  typography,
});
theme = responsiveFontSizes(theme, { factor: 3 });

export default theme;
