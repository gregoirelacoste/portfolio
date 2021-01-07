import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import refs from "../../data/refs.json";
import { makeStyles } from "@material-ui/core/styles";

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
        {refs.map((ref) => (
          <Grid item sm={6} md={4} style={{ padding: "15px" }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography component={"h2"} variant={"h3"} display={"inline"}>
                  {ref.client}
                </Typography>
                <Typography component={"h2"} variant={"h4"} display={"inline"}>
                  {" "}
                  {ref.date}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component={"p"} variant={"body1"}>
                  {" "}
                  {ref.details}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component={"p"} variant={"h4"} display={"inline"}>
                  Projet :{" "}
                </Typography>
                <Typography
                  component={"p"}
                  variant={"body1"}
                  display={"inline"}
                >
                  {ref.projet}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component={"p"} variant={"h4"} display={"inline"}>
                  Technos utilisées :{" "}
                </Typography>
                <Typography
                  component={"p"}
                  variant={"body1"}
                  display={"inline"}
                >
                  {ref.techno}
                </Typography>
              </Grid>
              {ref.url && (
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                  <Button
                    href={ref.url}
                    variant={"contained"}
                    target={"_blank"}
                  >
                    Voir le site
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default References;
