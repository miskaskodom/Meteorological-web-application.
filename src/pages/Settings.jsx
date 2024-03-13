import React, { useEffect, useState } from "react";
import SettingsList from "../components/SettingsList";

const Setting = () => {
  const [weatherOption, setWeatherOption] = useState({
    maxTemp: true,
    minTemp: true,
    presure: true,
  });

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("Settings"));
    if (storedSettings) {
      setWeatherOption(storedSettings);
    } else {
      setWeatherOption({
        maxTemp: true,
        minTemp: true,
        presure: true,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Settings", JSON.stringify(weatherOption));
  }, [weatherOption]);

  return (
    <SettingsList
      weatherOption={weatherOption}
      setWeatherOption={setWeatherOption}
    />
  );
};

export default Setting;
