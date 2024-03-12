import React from "react";


const Content = ({data, weatherOption}) => {
  return (
    <div className="w-full h-full px-4 font-mono pt-3 bg-slate-50">
      <div className="font-bold text-7xl drop h-20  bg-[#00665E] text-white rounded-3xl text-center items-center  shadow-lg shadow-[#1D766F]">
        {data.name}{" "}
      </div>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1   gap-9 pt-8 ">
        <div className=" flex flex-row   items-center justify-center bg-[#00665E]  text-white rounded-3xl shadow-lg shadow-[#1D766F]">
          <div className=" text-6xl">
            {data.main ? (
              <p>{Math.trunc(data.main.temp - 273.15)}°</p>
            ) : null}
          </div>
          <div>
            {" "}
            {data.weather ? (
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              />
            ) : null}
            <div className=" text-center text-3xl mb-3">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        </div>
        <div className=" bg-[#00665E] text-white text-center rounded-3xl p-6 grid grid-cols-2 md:grid-cols-1 grid-rows-3 items-center justify-between gap-8 md:grid-rows-3 text-3xl shadow-lg shadow-[#1D766F] ">
          <div className="md:flex md:flex-row bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]">
            Feels like{" "}
            {data.main ? (              <p>&nbsp;{Math.trunc(data.main.feels_like - 273.15)}°C</p>
            ) : null}
          </div>
          <div className="md:flex md:flex-row bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]">
            Humidity{" "}
            {data.main ? <p>&nbsp;{data.main.humidity}%</p> : null}
          </div>
          <div className="md:flex md:flex-row bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]">
            Wind{" "}
            {data.wind ? (
              <p>&nbsp;{Math.round(data.wind.speed)} m/s</p>
            ) : null}
          </div>
          <div className={` ${weatherOption.presure ? 'hidden' : ''} md:hidden bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`}>
            {data.main ? (
              <p>&nbsp;{data.main.pressure - 260} mmHg</p>
            ) : null}
          </div>
          <div className={` ${weatherOption.minTemp ? 'hidden': ''} md:hidden bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`}>
            Min temp
            {data.main ? (
              <p>&nbsp;{Math.trunc(data.main.temp_min - 273.15)}°</p>
            ) : null}
          </div>
          <div className={` ${weatherOption.maxTemp ? 'hidden' : ''} md:hidden bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`}>
            Max temp
            {data.main ? (
              <p>&nbsp;{Math.trunc(data.main.temp_max - 273.15)}°</p>
            ) : null}
          </div>
        </div>
      </div>
      <div className={` ${weatherOption.minTemp&&weatherOption.maxTemp&&weatherOption.presure? 'md:hidden' : ''}  bg-[#00665E] text-3xl w-full h-20 mt-8  p-6 gap-9 hidden md:flex flex-row justify-between  text-center items-center shadow-lg shadow-[#1D766F] rounded-3xl `}>
        <div className={` ${weatherOption.presure? 'md:hidden' : ''} hidden md:flex bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`} >
          {data.main ? (
            <p>&nbsp;{data.main.pressure - 260} mmHg</p>
          ) : null}
        </div>
        <div className={` ${weatherOption.minTemp? 'md:hidden': ''} hidden md:flex bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`}>
          Min temp
          {data.main ? (
            <p>&nbsp;{Math.trunc(data.main.temp_min - 273.15)}°</p>
          ) : null}
        </div>
        <div className={` ${weatherOption.maxTemp? 'md:hidden' : ''} hidden md:flex bg-[#33CEC3] text-white p-3 rounded-2xl shadow-inner shadow-[#1D766F]`}>
          Max temp
          {data.main ? (
            <p>&nbsp;{Math.trunc(data.main.temp_max - 273.15)}°</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Content;
