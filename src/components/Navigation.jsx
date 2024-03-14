import React from "react";
import ModalSettings from "./ModalSettings.jsx";
import gear from "../assets/icons8-settings-50.png";
import mark from "../assets/icons8-location-50.png";

import { useState } from "react";
import CityList from "./CityList.jsx";
import AddCity from "./AddCity.jsx";
import { Link } from "react-router-dom";

const Navigation = ({
  userLocation,
  serchLocation,
  finnal,
  location,
  setFinnal,
  setLocation,
  currentCity,
}) => {
  const [open, setOpen] = useState({ first: false, second: false });
  const [searchQuary, setSearchQuary] = useState("");

  const searchedCity = finnal.filter((city) => {
    return city.toUpperCase().includes(searchQuary.toUpperCase());
  });

  const addNewCity = () => {
    switch (
      finnal.includes(location[0].toUpperCase() + location.slice(1)) ||
      location == ""
    ) {
      case true:
        setLocation("Already saved !");
        setTimeout(() => {
          setLocation("");
        }, 1500);
        break;
      case false:
        serchLocation();
        setFinnal([...finnal, location[0].toUpperCase() + location.slice(1)]);
        setLocation("");
        break;
    }
  };

  const handleDelete = (itemToDelete) => {
    setFinnal(() => finnal.filter((item) => item !== itemToDelete));
  };

  return (
    <div className=" w-full h-20 flex flex-row items-center justify-between bg-slate-200  ">
      <button
        className="dive "
        onClick={() => setOpen({ ...open, first: true })}
      >
        <img src={mark} />
        <p >Add city </p>
      </button>

      <ModalSettings
        open={open.first}
        onClose={() => setOpen({ ...open, first: false })}
      >
        <>
          <div className="text-center w-96 h-72  flex flex-col items-start font-mono text-2xl">
            <h1 className=" text-3xl font-bold pl-12 mt-10 ">Add new location</h1>
            <AddCity
              location={location}
              setLocation={setLocation}
              addNewCity={addNewCity}
            />

            <div className=" pt-4 pl-6 mt-10">
              <input
                className="dive w-80"
                value={searchQuary}
                onChange={(e) => setSearchQuary(e.target.value)}
                type="text"
                placeholder="Search saved location..."
              />
            </div>
            <CityList
            userLocation={userLocation}
              finnal={searchedCity}
              currentCity={currentCity}
              handleDelete={handleDelete}
            />
          </div>
        </>
      </ModalSettings>

      <Link className="dive" to="/setting">
        <p>Settings </p>
        <img src={gear} />
      </Link>
    </div>
  );
};

export default Navigation;
