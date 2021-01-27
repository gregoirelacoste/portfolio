import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";
import useMainStyles from "../theme/mainStyles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Footer = () => {
  const { footer } = useMainStyles();
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        className={footer}
      >
        <Grid item sm={6}>
          <Typography
            style={{ wordSpacing: "6px" }}
            variant={"h4"}
            component={"p"}
          >
            JS | React | Node | PHP | Wordpress | Laravel
          </Typography>
          <Box m={1} />
          <Typography
            style={{ wordSpacing: "5px" }}
            variant={"body1"}
            component={"p"}
          >
            App | Métier | Vitrine | E-commerce
          </Typography>
        </Grid>
        <Grid item sm={6} style={{ textAlign: "center" }}>
          <IconButton
            href={"https://github.com/gregoirelacoste"}
            color={"secondary"}
            target={"_blank"}
            className={classes.icon}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href={"https://twitter.com/gregoirelacoste"}
            color={"secondary"}
            target={"_blank"}
            className={classes.icon}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            href={"https://www.linkedin.com/in/gregoirelacoste/"}
            color={"secondary"}
            target={"_blank"}
            className={classes.icon}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
