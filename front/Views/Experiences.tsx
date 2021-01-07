import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import exps from "../../data/exp.json";
import { makeStyles } from "@material-ui/core/styles";
import Exp from "../components/Exp";

const useClasses = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(5),
  },
}));

const Experiences = () => {
  const classes = useClasses();
  return (
    <Container maxWidth={"xl"} className={classes.main}>
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
