import { makeStyles, Theme } from "@material-ui/core/styles";

const footer = { md: "150px", xs: "220px" };
const nav = { md: "80px" };

const useMainStyles = makeStyles((theme: Theme) => ({
  app: {
    background: theme.palette.common.black,
    color: "#fff",
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
}));

export default useMainStyles;
