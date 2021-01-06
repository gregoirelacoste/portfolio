import React from "react";
import "../styles.css";
import { Container, Grid } from "@material-ui/core";
import Title from "../components/Title";
import Profil from "../components/Profil";
import useMainStyles from "../theme/mainStyles";
import Footer from "../components/Footer";

const Home = () => {
  const { mainContainer } = useMainStyles();

  return (
    <Container maxWidth={"xl"}>
      <Grid
        container
        justify="center"
        alignContent={"center"}
        alignItems={"center"}
        className={mainContainer}
      >
        <Title />
        <Profil />
      </Grid>
      <Footer />
    </Container>
  );
};

export default Home;
