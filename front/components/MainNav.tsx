import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMainStyles from "../theme/mainStyles";
import { style } from "../theme/typography";

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
