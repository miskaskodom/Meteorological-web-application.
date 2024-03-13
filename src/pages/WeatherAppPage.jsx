import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navigation.jsx";
import Content from "../components/Content.jsx";
import axios from "axios";
import Loader from "../components/UI/Loader.jsx";

function WeatherAppPage() {
  const [cords, setCords] = useState(() =>{
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
          setCords({latitude,longitude});
      }
  )});
  const [data, setData] = useState([]);
  const [finnal, setFinnal] = useState([]);
  const [location, setLocation] = useState("");
  const [weatherOption, setWeatherOption] = useState({
    maxTemp: true,
    minTemp: true,
    presure: true,
  });
  const [isInformationLoading, setIsInformationLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ffac7de82e62e32e7ba96eeeec7d0bcd`;

  const serchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
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

  const whatLocation = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cords.latitude}&lon=${cords.longitude}&appid=9eecc962315d7d019a25cb291a4e5b3a`).then((response) => {
      setData(response.data);
    });
  }

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

  useEffect(() => {
    const city = JSON.parse(localStorage.getItem("City"));
    console.log(city);
    if (city) {
      setFinnal(city);
    } else {
      setFinnal(["Nothing here"]);
    }
  }, []);


  useEffect(()=>{
    console.log('second')
    console.log(cords)
    whatLocation()
  },[])


  useEffect(() => {
    localStorage.setItem("City", JSON.stringify(finnal));
  }, [finnal]);

  

  return (
    <>
      <Header />
      <Navigation
        serchLocation={serchLocation}
        location={location}
        finnal={finnal}
        data={data}
        setFinnal={setFinnal}
        setLocation={setLocation}
        currentCity={currentCity}
        weatherOption={weatherOption}
        setWeatherOption={setWeatherOption}
      />
      {isInformationLoading ? (
        <Loader />
      ) : (
        <Content data={data} weatherOption={weatherOption} />
      )}
    </>
  );
}

export default WeatherAppPage;
