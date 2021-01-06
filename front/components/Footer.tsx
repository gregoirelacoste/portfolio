import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import useMainStyles from "../theme/mainStyles";

const Footer = () => {
  const { footer } = useMainStyles();
  return (
    <Container maxWidth={"xl"}>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={footer}
      >
        <Grid item sm={6}>
          <Typography variant={"h4"} component={"p"}>
            JS | React | Node | PHP | Wordpress | Laravel
          </Typography>
          <Box m={1} />
          <Typography variant={"body1"} component={"p"}>
            App | Métier | Vitrine | E-commerce
          </Typography>
        </Grid>
        <Grid item sm={6} style={{ textAlign: "center" }}>
          <IconButton
            href={"https://github.com/gregoirelacoste"}
            color={"primary"}
            target={"_blank"}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href={"https://twitter.com/gregoirelacoste"}
            color={"primary"}
            target={"_blank"}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            href={"https://www.linkedin.com/in/gregoirelacoste/"}
            color={"primary"}
            target={"_blank"}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
