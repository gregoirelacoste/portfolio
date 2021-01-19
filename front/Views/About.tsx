import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import PageLayout from "../Layout/PageLayout";

const About = () => {
  return (
    <PageLayout maxWidth={"lg"}>
      <Typography variant={"h1"} component={"h1"}>
        Developpeur Freelance - Node / React
      </Typography>
      <Typography variant={"h3"} component={"h2"}>
        Web addict depuis 2008
      </Typography>
      <Box m={3} />
      <Typography component={"p"}>
        <br /> Diplomé d'un master de management de projet technologique, je
        commence ma carrière en Agence digitale à Paris en tant que chef de
        projet et responsable stratégie web. <br />
        <br />
      </Typography>
      <Typography variant={"h3"} component={"h2"}>
        Indépendant depuis 2014
      </Typography>
      <Box m={3} />
      <Typography component={"p"}>
        Depuis Octobre 2014, je travaille en freelance au sein de mon entreprise
        Agence Level One à <strong>Albi</strong>. J’accompagne stratégiquement,
        conçoit et développe pour mes clients des applications et sites : métier
        (dashboard spécifique), e-commerce, vitrine, mini-jeu, services sur
        mesure... <br />
      </Typography>
      <Box m={3} />
      <Typography variant={"h3"} component={"h2"}>
        Node / React
      </Typography>
      <Box m={3} />
      <Typography component={"p"}>
        Je me spécialise principalement en NODE et REACT.js mais réalise
        toujours avec grand plaisir des sites ou app sous PHP, via des CMS tel
        que Wordpress ou Joomla ou encore des Framework tel que Laravel.
        <br />
        <br />
        Ma double casquette stratégie digitale et développeur Front / Back me
        permet d’accompagner mes clients dans de nombreuses problématiques sur
        du moyen long terme.
      </Typography>

      <Box m={3} />
      <Typography variant={"h3"} component={"h2"}>
        Enseignant Vacataire
      </Typography>
      <Box m={3} />
      <Typography component={"p"}>
        En parallèle de mon activité, je donne un jour par semaine des cours de
        conception web à des étudiants de master à Toulouse.
        <br />
        <br />
        N’hésitez pas à me contacter pour échanger. <br />
        <br />
        <Button
          color={"primary"}
          variant={"contained"}
          href={"mailto:gregoire@level-one.fr"}
        >
          Contactez-moi
        </Button>
      </Typography>
      <Box m={3} />
      <Typography variant={"h4"} component={"h2"}>
        Vous souhaitez récupérer mon site et mon boilerplate React / Node ?
      </Typography>
      <Typography variant={"body1"} component={"h1"}>
        Venez faire un tour sur la page github publique du projet
      </Typography>
      <br />
      <Button
        color={"secondary"}
        variant={"contained"}
        href={"https://github.com/gregoirelacoste/portfolio"}
        startIcon={<GitHubIcon />}
        target={"_blank"}
      >
        GitHub
      </Button>
      <Box m={5} />
    </PageLayout>
  );
};
export default About;
