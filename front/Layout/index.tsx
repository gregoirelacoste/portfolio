import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";
import IconBtn from "../../services/components/IconBtn";
import { SendRounded } from "@material-ui/icons";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  const { app, page } = useMainStyles();
  return (
    <div className={app}>
      <div className={page}>
        <MainNav />
        {children}
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
