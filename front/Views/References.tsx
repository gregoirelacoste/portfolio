import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import refs from "../../data/refs.json";
import { makeStyles } from "@material-ui/core/styles";
import Ref from "../components/Ref";
import { RefType } from "../../domain/references";

const useClasses = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(5),
  },
}));

const References = () => {
  const classes = useClasses();
  return (
    <Container maxWidth={"xl"} className={classes.main}>
      <Box m={3} />
      <Typography component={"h1"} variant={"h1"}>
        Dernières références
      </Typography>
      <Grid container spacing={3}>
        {refs.map((ref: RefType) => (
          <Ref reference={ref} />
        ))}
      </Grid>
    </Container>
  );
};
export default References;
