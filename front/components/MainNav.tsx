import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMainStyles from "../theme/mainStyles";
import { style } from "../theme/typography";
import { LINKS } from "../config";

const useStyle = makeStyles((theme) => ({
  ul: {
    padding: theme.spacing(3),
    "& a": style.a,
    "& li": {
      display: "inline-block",
      paddingRight: "20px",
    },
  },
}));

const MainNav = () => {
  const { nav } = useMainStyles();
  const classes = useStyle();
  return (
    <nav className={nav}>
      <ul className={classes.ul}>
        <li>
          <Link to={LINKS.home}>Accueil</Link>
        </li>
        <li>
          <Link to={LINKS.about}>A propos</Link>
        </li>
        <li>
          <Link to={LINKS.ref}>Références</Link>
        </li>
        <li>
          <Link to={LINKS.exp}>Expériences</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainNav;
