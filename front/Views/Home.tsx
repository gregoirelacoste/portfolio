import React from "react";
import "../styles.css";
import { Grid } from "@material-ui/core";
import Title from "../components/Title";
import Profil from "../components/Profil";
import Footer from "../components/Footer";
import PageLayout from "../Layout/PageLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  container: {
    marginTop: "5%",
    marginBottom: "5%",
  },
});

const Home = () => {
  const classes = useStyle();
  return (
    <PageLayout
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-around",
      }}
    >
      <Grid
        container
        justify="center"
        alignContent={"center"}
        alignItems={"center"}
        className={classes.container}
      >
        <Title />
        <Profil />
      </Grid>
      <Grid
        container
        justify="center"
        alignContent={"center"}
        alignItems={"center"}
      >
        <Footer />
      </Grid>
    </PageLayout>
  );
};

export default Home;
