import { FormControlLabel, Switch } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "0",
    top: "0",
    padding: theme.spacing(3),
  },
}));

const ColorSwitch = ({
  light,
  setTheme,
}: {
  light: boolean;
  setTheme: (themeState: boolean) => void;
}) => {
  const classes = useStyles();
  const handleChange = () => {
    setTheme(!light);
  };
  return (
    <FormControlLabel
      className={classes.root}
      control={
        <Switch
          checked={light}
          onChange={handleChange}
          name="checkedB"
          color="secondary"
        />
      }
      label={light ? "Dark Theme ?" : "Light Theme ?"}
    />
  );
};
export default ColorSwitch;
