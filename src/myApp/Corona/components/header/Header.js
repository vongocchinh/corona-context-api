import React from "react";
import Img from "./image.png";
export const Header = () => {
  return (
    <>
      <div className="header-app">
        <img src={Img} alt="corona-app" />
      </div>
    </>
  );
};

export default Header;
