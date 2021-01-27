import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import { Container } from "@material-ui/core";
import useMainStyles from "../theme/mainStyles";

interface PageLayoutProps {
  children: JSX.Element[] | JSX.Element;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  style?: any;
}

const PageLayout = ({
  children,
  maxWidth = "xl",
  style = null,
}: PageLayoutProps) => {
  const classes = useMainStyles();

  return (
    <ScrollContainer hideScrollbars={false} className={classes.mainContainer}>
      <Container
        maxWidth={maxWidth}
        className={classes.pageLayout}
        style={style}
      >
        {children}
      </Container>
    </ScrollContainer>
  );
};
export default PageLayout;
