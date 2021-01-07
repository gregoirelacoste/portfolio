import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMainStyles from "../theme/mainStyles";
import { style } from "../theme/typography";
import { LINKS } from "../config";
import MenuBurger from "../../services/components/MenuBurger";
import { Tooltip } from "@material-ui/core";

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

const message = "Pour scroller, utilisez le drag ans drop";

const MainNav = () => {
  const { nav } = useMainStyles();
  const classes = useStyle();
  return (
    <MenuBurger>
      <nav className={nav}>
        <ul className={classes.ul}>
          <li>
            <Tooltip title={message}>
              <Link to={LINKS.home}>Accueil</Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <Link to={LINKS.about}>A propos</Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <Link to={LINKS.ref}>Références</Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <Link to={LINKS.exp}>Expériences</Link>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </MenuBurger>
  );
};
export default MainNav;
