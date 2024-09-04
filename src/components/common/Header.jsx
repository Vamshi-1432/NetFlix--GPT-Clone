import React from "react";
import Netflix_Logo from "../../Images/Netflix_Logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 bg-bgcolor">
      <img src={Netflix_Logo} alt="logo" className="w-44 h-[100px]" />
    </div>
  );
};

export default Header;
