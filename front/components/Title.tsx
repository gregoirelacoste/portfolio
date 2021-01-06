import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3),
    },
  },
  mainText: {
    lineHeight: "0.8em",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      textAlign: "right",
    },
  },
}));

const Title = () => {
  const classes = useStyle();
  return (
    <Grid item lg={6}>
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <div className={classes.title}>
            <Typography
              variant={"h1"}
              component={"h1"}
              className={classes.mainText}
            >
              Full stack
            </Typography>
            <Typography
              variant={"h2"}
              component={"h2"}
              className={classes.mainText}
            >
              Freelance Dev
            </Typography>
            <Typography
              variant={"h3"}
              component={"h3"}
              className={classes.mainText}
            >
              gregoire lacoste
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Title;
