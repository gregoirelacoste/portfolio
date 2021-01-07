import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import exps from "../../data/exp.json";
import Exp from "../components/Exp";
import useMainStyles from "../theme/mainStyles";

const Experiences = () => {
  const classes = useMainStyles();
  return (
    <Container maxWidth={"xl"} className={classes.pageLayout}>
      <Box m={3} />
      <Typography component={"h1"} variant={"h1"}>
        Expériences
      </Typography>
      <Grid container spacing={3}>
        {exps.map((exp) => (
          <Exp exp={exp} />
        ))}
      </Grid>
    </Container>
  );
};
export default Experiences;
