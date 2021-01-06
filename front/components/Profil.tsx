import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PATHS } from "../../config/paths";

const useStyle = makeStyles({
  profil: {
    height: "400px",
    width: "400px",
    border: "10px solid black",
    background: `center / cover no-repeat url("${PATHS.APP_ROOT}contents/img/profil.jpg")`,
  },
});

const Profil = () => {
  const classes = useStyle();

  return (
    <Grid item lg={6}>
      <Grid container justify="center" alignContent={"center"}>
        <Grid item>
          <div className={classes.profil} />
          <Box m={1} />
          <Typography
            component={"a"}
            href={"mailto:gregoire@level-one.fr"}
            variant={"body1"}
          >
            gregoire@level-one.fr
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profil;
