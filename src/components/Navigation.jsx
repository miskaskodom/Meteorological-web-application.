import React from "react";
import ModalSettings from "./ModalSettings.jsx";
import Setting from "../assets/icons8-settings-50.png";

import { useState } from "react";
import SettingsList from "./SettingsList.jsx";

const Navigation = ({
  serchLocation,
  finnal,
  location,
  data,
  setFinnal,
  setLocation,
  currentCity,
  weatherOption,
  setWeatherOption,
}) => {
  const [open, setOpen] = useState({ first: false, second: false });

  const handleSubmit = () => {
    serchLocation();
    setFinnal([...finnal, location]);
    setLocation("");
  };

  const handleDelete = (itemToDelete) => {
    setFinnal(() => finnal.filter((item) => item !== itemToDelete));
  };

  return (
    <div className=" w-full h-20 flex flex-row items-center justify-between bg-slate-200 px-4">
      <button
        className="dive "
        onClick={() => setOpen({ ...open, first: true })}
      >
        <p>Add city </p>
      </button>

      <ModalSettings
        open={open.first}
        onClose={() => setOpen({ ...open, first: false })}
      >
        <>
          <div className="text-center w-96 h-72  flex flex-col items-start font-mono text-2xl">
            <h1 className=" text-3xl font-bold pl-12 ">Add new location</h1>
            <div className="flex flex-row mt-2">
              <input
                placeholder="Enter your city"
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="dive pl-4"
              ></input>

              <button
                className=" text-3xl font-bold pl-5"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-9 h-14 hover:text-gray-600 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
            <div className=" w-96 bg-[#00665E] mt-3 rounded-2xl">
              <div className=" w-96 h-max p-4">
                {finnal.length > 0 &&
                  finnal.map((City, index) => (
                    <div
                      onClick={() => currentCity(City)}
                      key={index}
                      className="flex flex-row cursor-pointer hover:bg-[#33cec4e0] text-white  bg-[#33CEC3] p-2 justify-between border-b-4 border-[#00665E] rounded-2xl"
                    >
                      <div className=" cursor-pointer">{ City}</div>
                      <button onClick={() => handleDelete(City)}> X</button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      </ModalSettings>

      <button
        className="dive"
        onClick={() => setOpen({ ...open, second: true })}
      >
        <p>Settings </p>
        <img src={Setting} />
      </button>
      <ModalSettings
        open={open.second}
        onClose={() => setOpen({ ...open, second: false })}
      >
        <SettingsList
          weatherOption={weatherOption}
          setWeatherOption={setWeatherOption}
        />
      </ModalSettings>
    </div>
  );
};

export default Navigation;
