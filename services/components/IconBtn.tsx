import React from "react";
import { IconButton, IconButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PositionElement } from "../../webpack/types/position";

const useStyle = makeStyles((theme) => ({
  btn: (props: IconBtnProps) => ({
    position:
      props.positionType === "fixed"
        ? "fixed"
        : props.positionType === "absolute"
        ? "absolute"
        : "initial",
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
    transition: "0.5s",
    "&:hover": {
      background: theme.palette.secondary.light,
      color: theme.palette.primary.main,
    },
  }),
  bottomRight: {
    bottom: "5%",
    right: "2%",
  },
  topRight: {
    top: "2%",
    right: "2%",
  },
}));

interface IconBtnProps extends IconButtonProps {
  icon: any;
  position: PositionElement;
  positionType?: "fixed" | "absolute";
  href?: string;
}

const IconBtn = (props: IconBtnProps) => {
  const classes = useStyle(props);
  const { icon, position, positionType, ...rest } = props;

  const elementPosition =
    props.position === "TopRight" ? classes.topRight : classes.bottomRight;
  return (
    <IconButton className={`${classes.btn} ${elementPosition}`} {...rest}>
      {props.icon}
    </IconButton>
  );
};

export default IconBtn;
