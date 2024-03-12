import React from "react";


const WeatherSettingBlock = ({onClick, children}) =>{
    return(
        <div
        className={` cursor-pointer bg-[#00665E] hover:bg-[#00665ed0] flex font-mono flex-row items-center font-bold text-2xl p-2 rounded-3xl text-white shadow-md shadow-[#1D766F] `}
        onClick={onClick}
      >
       {children}
      </div>
    )
}

export default WeatherSettingBlock;