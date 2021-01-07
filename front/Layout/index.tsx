import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";
import IconBtn from "../../services/components/IconBtn";
import { SendRounded } from "@material-ui/icons";
import ScrollContainer from "react-indiana-drag-scroll";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  const { app, page, scrollContainer } = useMainStyles();
  return (
    <div className={app}>
      <div className={page}>
        <MainNav />
        <ScrollContainer vertical className={scrollContainer}>
          {children}
        </ScrollContainer>
      </div>
      <IconBtn
        icon={<SendRounded />}
        position={"BottomRight"}
        positionType={"fixed"}
        href={"mailto:gregoire@level-one.fr"}
      />
    </div>
  );
};

export default Layout;
