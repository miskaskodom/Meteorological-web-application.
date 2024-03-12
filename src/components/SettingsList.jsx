import React from "react";
import WeatherSettingBlock from "./UI/WeatherSettingBlock";

const SettingsList = ({ weatherOption, setWeatherOption }) => {
  return (
    <div className="text-center w-96 h-72 p-6 justify-between flex flex-col  font-mono text-3xl items-center">
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
  );
};

export default SettingsList;
