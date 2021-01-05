import { makeStyles, Theme } from "@material-ui/core/styles";

const useMainStyles = makeStyles((theme: Theme) => ({
  app: {
    background: theme.palette.common.black,
    color: "#fff",
    height: "100vh",
  },
  container: {
    height: "calc(100% - 100px)",
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 170px)",
    },
  },
}));

export default useMainStyles;
