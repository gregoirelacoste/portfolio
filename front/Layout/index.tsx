import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";
import EmailIcon from "@material-ui/icons/Email";
import IconBtn from "../../services/components/IconBtn";

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
        icon={<EmailIcon />}
        position={"BottomRight"}
        positionType={"fixed"}
        href={"mailto:gregoire@level-one.fr"}
        tooltip={"Un besoin ? Contactez-moi !"}
      />
    </div>
  );
};

export default Layout;
