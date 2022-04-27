import React from "react";
import MainHeader from "./header";
import MainFooter from "./footer";

function MainLayout({ headerProps = {}, children }) {
  return (
    <div className="page-container">
      <MainHeader {...headerProps} />
      <div className="main-layout">{children}</div>
      <MainFooter />
    </div>
  );
}

export default MainLayout;
