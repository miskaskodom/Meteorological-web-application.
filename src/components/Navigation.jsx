import React from "react";
import ModalSettings from "./ModalSettings.jsx";
import Setting from "../assets/icons8-settings-50.png";

import { useState } from "react";
import SettingsList from "./SettingsList.jsx";
import CityList from "./CityList.jsx";
import AddCity from "./AddCity.jsx";

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
  const [searchQuary, setSearchQuary] = useState("");

  const searchedCity = finnal.filter(city => {
      return city.toUpperCase().includes(searchQuary.toUpperCase())
    })
  

  const addNewCity = () => {
    switch( finnal.includes(location)|| location == ''){
      case true:
        setLocation("Already saved !");
      setTimeout(() => {
        setLocation("");
      }, 1500);
      break;
      case false:
        serchLocation();
        setFinnal([...finnal, location]);
      setLocation("");
      break;
    }
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
            <AddCity
              location={location}
              setLocation={setLocation}
              addNewCity={addNewCity}
            />

            <div className="pt-4">
              <input
                value={searchQuary}
                onChange={(e) => setSearchQuary(e.target.value)}
                type="text"
                placeholder="Search..."
              />
            </div>
            <CityList
              finnal={searchedCity}
              currentCity={currentCity}
              handleDelete={handleDelete}
            />
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
