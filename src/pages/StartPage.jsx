import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const StartPage = () => {
  return (
    <div className=" flex  flex-col  items-center pt-36">
      <div className=" bg-[#00665e] p-16 rounded-3xl text-center shadow-2xl shadow-[#00665e]  ">
        {" "}
        <div className="bg-slate-200 p-4 rounded-2xl">
          <img className="bg-slate-200 p-1 rounded-2xl w-96" src={logo} />
          <div className="justify-center font-mono text-4xl text-[#3a6fa0] font-bold ">
            Weather app
          </div>

          <Link className="dive justify-center mt-6" to="/mainapp">
            Main app
          </Link>

          <Link className="dive justify-center mt-2" to="/aboutapp">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
