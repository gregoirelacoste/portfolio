import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";
import IconBtn from "../../services/components/IconBtn";
import { SendRounded } from "@material-ui/icons";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  const { app, mainContainer } = useMainStyles();
  return (
    <div className={app}>
      <MainNav />
      <div className={mainContainer}>{children}</div>
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
