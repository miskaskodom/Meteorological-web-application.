import React from "react";
import WeatherSettingBlock from "./UI/WeatherSettingBlock";
import { Link } from "react-router-dom";

const SettingsList = ({ weatherOption, setWeatherOption }) => {
  return (
    <div className="  flex justify-center">
      <div className="text-center w-96 h-80 p-6 justify-between flex flex-col  font-mono text-3xl items-center bg-[#00665e] rounded-3xl">
        <div className=" bg-slate-200 p-2 rounded-3xl">
          <h1 className=" text-5xl font-bold ">Settings</h1>
          <WeatherSettingBlock
            onClick={() =>
              setWeatherOption({
                ...weatherOption,
                presure: !weatherOption.presure,
              })
            }
          >
            {" "}
            {weatherOption.presure ? "Add" : "Remove"} presure{" "}
          </WeatherSettingBlock>

          <WeatherSettingBlock
            onClick={() =>
              setWeatherOption({
                ...weatherOption,
                minTemp: !weatherOption.minTemp,
              })
            }
          >
            {weatherOption.minTemp ? "Add" : "Remove"} min temperature
          </WeatherSettingBlock>

          <WeatherSettingBlock
            onClick={() =>
              setWeatherOption({
                ...weatherOption,
                maxTemp: !weatherOption.maxTemp,
              })
            }
          >
            {weatherOption.maxTemp ? "Add" : "Remove"} max temperature
          </WeatherSettingBlock>
        </div>
        <Link to="/mainapp" className="dive mt-12">
          Back to app
        </Link>
      </div>
    </div>
  );
};

export default SettingsList;
