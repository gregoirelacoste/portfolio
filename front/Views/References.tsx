import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import refs from "../../data/refs.json";
import Ref from "../components/Ref";
import { RefType } from "../../domain/references";
import useMainStyles from "../theme/mainStyles";

const References = () => {
  const classes = useMainStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth={"xl"} className={classes.pageLayout}>
      <Box m={3} />
      <Typography component={"h1"} variant={"h1"}>
        {mobile ? "Mes Réfs" : "Dernières références"}
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
