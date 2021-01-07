import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import exps from "../../data/exp.json";
import Exp from "../components/Exp";
import PageLayout from "../Layout/PageLayout";

const Experiences = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <PageLayout maxWidth={"xl"}>
      <Box m={3} />
      <Typography component={"h1"} variant={"h1"}>
        {mobile ? "Mes XPs" : "Expériences"}
      </Typography>
      <Grid container spacing={3}>
        {exps.map((exp) => (
          <Exp exp={exp} />
        ))}
      </Grid>
    </PageLayout>
  );
};
export default Experiences;
