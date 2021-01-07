import React from "react";
import "../styles.css";
import { Grid } from "@material-ui/core";
import Title from "../components/Title";
import Profil from "../components/Profil";
import useMainStyles from "../theme/mainStyles";
import Footer from "../components/Footer";
import PageLayout from "../Layout/PageLayout";

const Home = () => {
  const { homeContainer } = useMainStyles();

  return (
    <PageLayout>
      <Grid
        container
        justify="center"
        alignContent={"center"}
        alignItems={"center"}
        className={homeContainer}
      >
        <Title />
        <Profil />
      </Grid>
      <Footer />
    </PageLayout>
  );
};

export default Home;
