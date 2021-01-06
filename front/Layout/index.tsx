import React, { ReactElement } from "react";
import useMainStyles from "../theme/mainStyles";
import MainNav from "../components/MainNav";

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
    </div>
  );
};

export default Layout;
