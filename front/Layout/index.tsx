import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  const { app } = useMainStyles();
  return (
    <div className={app}>
      <MainNav />
      {children}
    </div>
  );
};

export default Layout;
