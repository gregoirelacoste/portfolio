export const springEffect = (theme) => ({
  pageTransition: {
    from: {
      position: "absolute",
      width: "100%",
      opacity: 0,
      transform: "translate(100%,0)",
      background: theme.palette.primary.dark,
      padding: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: "translate(0%,0)",
      background: theme.palette.primary.dark,
      padding: 0,
      margin: 0,
    },
    leave: {
      opacity: 0,
      transform: "translate(-50%,0)",
      background: theme.palette.primary.dark,
      padding: 0,
      margin: 0,
    },
  },
});
