import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex bg-[#00665e]  w-full h-20 items-center pl-4 ">
      <Link to="/">
        {" "}
        <img
          className=" w-64 cursor-pointer bg-slate-200 p-1 rounded-2xl"
          src={logo}
        />
      </Link>
    </div>
  );
};

export default Header;
