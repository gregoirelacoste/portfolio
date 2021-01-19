import { NavLink } from "react-router-dom";
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

const CustomNavLink = React.forwardRef(function CustomNavLink(
  { to, children, ...rest }: any,
  ref: any
) {
  return (
    <NavLink {...rest} activeStyle={{ ...style.active }} to={to} ref={ref}>
      {children}
    </NavLink>
  );
});

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
              <CustomNavLink to={LINKS.home} exact>
                Accueil
              </CustomNavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <CustomNavLink to={LINKS.about}>A propos</CustomNavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <CustomNavLink to={LINKS.ref}>Références</CustomNavLink>
            </Tooltip>
          </li>
          <li>
            <Tooltip title={message}>
              <CustomNavLink to={LINKS.exp}>Expériences</CustomNavLink>
            </Tooltip>
          </li>
        </ul>
      </nav>
    </MenuBurger>
  );
};
export default MainNav;
