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
    },
    nav: {
      width: "100%",
      textAlign: "right",
      height: nav.md,
    },
    page: {
      minHeight: "100vh",
    },
    mainContainer: {
      height: `calc(100vh - ${footer.md} - ${nav.md})`,
      [theme.breakpoints.down("xs")]: {
        height: `calc(100vh% - ${footer.xs} - ${nav.md})`,
      },
    },
    footer: {
      height: footer.md,
      [theme.breakpoints.down("xs")]: {
        height: footer.xs,
      },
    },
  };
});

export default useMainStyles;
