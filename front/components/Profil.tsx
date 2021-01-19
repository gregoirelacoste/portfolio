import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { config } from "../../server/config";
import CustomTooltip from "../CustomTooltip";

const useStyle = makeStyles((theme) => ({
  profil: {
    border: "4px solid " + theme.palette.neutral.dark,
    background: `center / cover no-repeat url("${config.CONTENTS_PATH}/img/profil.jpg")`,
    [theme.breakpoints.down("sm")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      height: "230px",
      width: "230px",
    },
    [theme.breakpoints.up("md")]: {
      height: "400px",
      width: "400px",
    },
  },
}));

const Profil = () => {
  const classes = useStyle();

  return (
    <Grid item lg={6}>
      <Grid container justify="center" alignContent={"center"}>
        <Grid item>
          <div className={classes.profil} />
          <Box m={1} />
          <CustomTooltip text={"C'est mon mail ! Cliquez pour me contacter"}>
            <Typography
              component={"a"}
              href={"mailto:gregoire@level-one.fr"}
              variant={"body1"}
            >
              gregoire@level-one.fr
            </Typography>
          </CustomTooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profil;
