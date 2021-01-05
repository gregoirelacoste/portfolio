import React from "react";
import "../styles.css";
import { Container, Grid } from "@material-ui/core";
import Title from "../components/Title";
import Profil from "../components/Profil";
import Footer from "../components/Footer";
import useMainStyles from "../theme/mainStyles";

const Home = () => {
  const mainClasses = useMainStyles();

  return (
    <Container maxWidth={"xl"} className={mainClasses.container}>
      <Grid
        container
        justify="center"
        alignContent={"center"}
        alignItems={"center"}
        className={mainClasses.container}
      >
        <Title />
        <Profil />
      </Grid>
      <Footer />
    </Container>
  );
};

export default Home;
