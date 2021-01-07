import { Grid, Typography } from "@material-ui/core";
import React from "react";

interface ExpProps {
  exp: {
    entreprise: string;
    debut: number;
    fin: number | string;
    ville: string;
    poste: string;
    mission: string;
  };
}

const Exp = ({ exp }: ExpProps) => {
  return (
    <Grid item md={6} style={{ padding: "25px 15px 25px 15px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component={"h2"} variant={"h4"}>
            {" "}
            {exp.debut} | {exp.fin}
          </Typography>
          <Typography component={"h2"} variant={"h3"}>
            {exp.entreprise}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"body1"}>
            {" "}
            {exp.ville}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"h4"} display={"inline"}>
            Poste :{" "}
          </Typography>
          <Typography component={"p"} variant={"body1"} display={"inline"}>
            {exp.poste}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component={"p"} variant={"h4"} display={"inline"}>
            Mission :{" "}
          </Typography>
          <Typography component={"p"} variant={"body1"} display={"inline"}>
            {exp.mission}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Exp;
