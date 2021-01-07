import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import IconBtn from "../IconBtn";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LINKS } from "../../../front/config";
import { style } from "../../../front/theme/typography";

const useStyle = makeStyles((theme) => ({
  main: {
    background: theme.palette.secondary.dark,
    height: "100vh",
    width: "100%",
    position: "absolute",
    zIndex: 999,
  },
  ul: {
    padding: theme.spacing(3),
    textAlign: "center",
    "& a": { ...style.a, fontSize: "2rem" },
    "& li": {
      padding: "20px",
    },
  },
}));

const MenuBurger = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyle();
  const theme = useTheme();
  const displayBurger = useMediaQuery(theme.breakpoints.down("md"));
  if (!displayBurger) return children;

  return (
    <>
      {!open && (
        <IconBtn
          onClick={() => setOpen(true)}
          icon={<MenuIcon />}
          positionType={"absolute"}
          position={"TopRight"}
        />
      )}

      {open && (
        <Grid
          onClick={() => setOpen(false)}
          container
          className={classes.main}
          justify={"center"}
          alignItems={"center"}
        >
          <IconBtn
            onClick={() => setOpen(false)}
            icon={<CloseIcon />}
            positionType={"absolute"}
            position={"TopRight"}
          />
          <Grid item>
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
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default MenuBurger;
