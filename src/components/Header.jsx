import React from "react";
import ThemeMode from "./ThemeMode";

function Header() {
  return (
    <div className="header shadow-md p-[23px] ">
      <div className="container mx-auto flex flex-col  sm:flex-row justify-between items-center ">
        <h1 style={{fontWeight: "800", fontSize: "24px"}}>Where in the world?</h1>
        <ThemeMode />
      </div>
    </div>
  );
}

export default Header;
