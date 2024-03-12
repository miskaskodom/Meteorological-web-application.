import React from "react";

const SettingsList = ({ weatherOption, setWeatherOption }) => {
  return (
    <div className="text-center w-96 h-72 p-6 justify-between flex flex-col  font-mono text-3xl items-center">
      <h1 className=" text-5xl font-bold ">Settings</h1>

      <div
        className={` cursor-pointer bg-[#00665E] hover:bg-[#00665ed0] flex font-mono flex-row items-center font-bold text-2xl p-2 rounded-3xl text-white shadow-md shadow-[#1D766F] `}
        onClick={() =>
          setWeatherOption({
            ...weatherOption,
            presure: !weatherOption.presure,
          })
        }
      >
        {weatherOption.presure ? "Add" : "Remove"} presure
      </div>

      <div
        className={` cursor-pointer bg-[#00665E] hover:bg-[#00665ed0] flex font-mono flex-row items-center font-bold text-2xl p-2 rounded-3xl text-white shadow-md shadow-[#1D766F] `}
        onClick={() =>
          setWeatherOption({
            ...weatherOption,
            minTemp: !weatherOption.minTemp,
          })
        }
      >
        {weatherOption.minTemp ? "Add" : "Remove"} min temperature
      </div>

      <div
        className={` cursor-pointer bg-[#00665E] hover:bg-[#00665ed0] flex font-mono flex-row items-center font-bold text-2xl p-2 rounded-3xl text-white shadow-md shadow-[#1D766F] `}
        onClick={() =>
          setWeatherOption({
            ...weatherOption,
            maxTemp: !weatherOption.maxTemp,
          })
        }
      >
        {weatherOption.maxTemp ? "Add" : "Remove"}  max temperature
      </div>
    </div>
  );
};

export default SettingsList;
