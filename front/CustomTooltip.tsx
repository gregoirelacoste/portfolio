import React from "react";
import { makeStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Grid, Tooltip, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  insideTooltip: {
    width: 220,
    height: 220,
  },
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    width: 220,
    height: 220,
    fontSize: theme.typography.pxToRem(12),
    borderRadius: "100%",
  },
}))(Tooltip);

const InsideToolTip = ({ text, className }) => {
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      className={className}
    >
      <Grid item>
        <Typography variant={"h4"} component={"p"} align={"center"}>
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

const CustomTooltip = ({ children, text }) => {
  const classes = useStyle();
  return (
    <HtmlTooltip
      title={<InsideToolTip text={text} className={classes.insideTooltip} />}
    >
      {children}
    </HtmlTooltip>
  );
};

export default CustomTooltip;
