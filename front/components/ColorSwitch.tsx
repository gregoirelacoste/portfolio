import { FormControlLabel, Switch } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { themeType } from "../theme/switchTheme";
import { useReactiveVar } from "@apollo/client";
import { themeVar } from "../graphql/cache/variables/theme.var";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "0",
    top: "0",
    padding: theme.spacing(3),
  },
}));

const ColorSwitch = () => {
  const theme = useReactiveVar(themeVar);
  const classes = useStyles();

  const handleChange = (e) => {
    const getType =
      e.target.value === "true" ? themeType.light : themeType.dark;
    themeVar({
      type: getType,
    });
  };

  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch
          onChange={handleChange}
          name="checkedB"
          color="secondary"
          value={theme.type !== themeType.light}
        />
      }
      label={theme.type === themeType.dark ? "Dark Theme ?" : "Light Theme ?"}
    />
  );
};
export default ColorSwitch;
