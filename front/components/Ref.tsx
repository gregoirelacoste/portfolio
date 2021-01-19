import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RefType } from "../../domain/references";

interface RefProps {
  reference: RefType;
}

const Ref = ({ reference }: RefProps) => {
  if (!reference) return null;
  return (
    <Grid item sm={6} md={4} style={{ padding: "15px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component={"h2"} variant={"h3"} display={"inline"}>
            {reference.client}
          </Typography>
          <Typography component={"p"} variant={"body1"} display={"inline"}>
            {" "}
            {reference.date}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"body1"}>
            {" "}
            {reference.details}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"h4"} display={"inline"}>
            Projet :{" "}
          </Typography>
          <Typography component={"p"} variant={"body1"} display={"inline"}>
            {reference.projet}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"h4"} display={"inline"}>
            Technos utilisées :{" "}
          </Typography>
          <Typography component={"p"} variant={"body1"} display={"inline"}>
            {reference.techno}
          </Typography>
        </Grid>
        {reference.url && (
          <Grid item xs={12} style={{ marginTop: "15px" }}>
            <Button
              href={reference.url}
              variant={"contained"}
              target={"_blank"}
            >
              Voir le site
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
export default Ref;
