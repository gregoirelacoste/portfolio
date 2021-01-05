import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  main: {
    width: "100%",
    textAlign: "right",
  },
  nav: {
    padding: theme.spacing(3),
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
      fontSize: "18px",
      fontFamily: "Rubik Mono One",
      transition: "0.7s",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },

    "& li": {
      display: "inline-block",
      paddingRight: "20px",
    },
  },
}));

const MainNav = () => {
  const classes = useStyle();
  return (
    <nav className={classes.main}>
      <ul className={classes.nav}>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainNav;
