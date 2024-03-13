import React from "react";

const Loader = () => {
  return (
    <div className="flex   justify-center items-center flex-col  mt-28 ">
      <h1 className=" text-6xl">Loading...</h1>
      <div className="  w-56 h-56 rounded-full border-4 border-dashed border-blue-400 animate-spin "></div>
    </div>
  );
};

export default Loader;
