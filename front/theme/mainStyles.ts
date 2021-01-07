import { makeStyles, Theme } from "@material-ui/core/styles";

const footer = { md: "150px", xs: "220px" };
const nav = { md: "80px" };
const useMainStyles = makeStyles((theme: Theme) => {
  return {
    app: {
      background: theme.palette.primary.dark,
      color: "#fff",
    },
    pageLayout: {
      color: "#fff",
      padding: theme.spacing(5),
      height: "100%",
    },
    homeContainer: {
      height: `calc(100% - ${footer.md})`,
    },
    nav: {
      width: "100%",
      textAlign: "right",
      height: nav.md,
    },
    footer: {
      height: footer.md,
      [theme.breakpoints.down("xs")]: {
        height: footer.xs,
      },
    },
    scrollContainer: {
      height: `calc(100vh - ${nav.md})`,
      [theme.breakpoints.down("md")]: {
        height: "100vh",
      },
    },
  };
});

export default useMainStyles;
