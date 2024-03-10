import React, { useState, useEffect } from "react";
//import { useLocalStorage } from "./hooks/localstorage.js"
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Content from "./components/Content.jsx";
import axios from "axios";

function App() {
  const [cords, setCords] = useState({ lon: 0, lat: 0 });
  const [data, setData] = useState({});
  const [finnal, setFinnal] = useState([]);
  const [location, setLocation] = useState("");
  const [database, setDataBase] = useState([]);
  //const [fromLocal,setFromLocal]= useLocalStorage('City','');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ffac7de82e62e32e7ba96eeeec7d0bcd`;

  const serchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);

      // console.log([...database])
    });
  };

  const currentCity = (City) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=ffac7de82e62e32e7ba96eeeec7d0bcd`
      )
      .then((response) => {
        setData(response.data);
      });
  };
  const removeCity = (index) => {
    setDataBase((prevState) => prevState.filter((el) => el != database[index]));
  };

  useEffect(() => {
    localStorage.setItem("City", JSON.stringify(finnal));
  }, [finnal]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("City"));
    if (finnal) {
      setFinnal((prev) => [...prev,finnal]);
    }
  }, []);

  useEffect(() => {
    setDataBase((prev) => [...prev, data.name]);
  }, [data]);

  useEffect(() => {
    const countItems = {};
    for (const item of database) {
      // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
      countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
    }
    setFinnal(Object.keys(countItems).filter((item) => (countItems[item] = 1)));
  }, [database]);

  useEffect(() => {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.lon}&appid=9eecc962315d7d019a25cb291a4e5b3a`;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCords((cords.lat = position.coords.latitude));
        setCords((cords.lon = position.coords.longitude));
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("user denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
        }
      }
    );

    axios.get(currentUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Navigation
        serchLocation={serchLocation}
        location={location}
        finnal={finnal}
        setLocation={setLocation}
        removeCity={removeCity}
        currentCity={currentCity}
      />
      <Content data={data} />
    </>
  );
}

export default App;
