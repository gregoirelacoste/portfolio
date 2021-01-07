import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import { Container } from "@material-ui/core";
import useMainStyles from "../theme/mainStyles";

interface PageLayoutProps {
  children: JSX.Element[];
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

const PageLayout = ({ children, maxWidth = "xl" }: PageLayoutProps) => {
  const classes = useMainStyles();

  return (
    <ScrollContainer vertical className={classes.mainContainer}>
      <Container maxWidth={maxWidth} className={classes.pageLayout}>
        {children}
      </Container>
    </ScrollContainer>
  );
};
export default PageLayout;
