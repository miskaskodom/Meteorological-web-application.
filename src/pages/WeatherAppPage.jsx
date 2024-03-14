import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navigation.jsx";
import Content from "../components/Content.jsx";
import axios from "axios";
import Loader from "../components/UI/Loader.jsx";

function WeatherAppPage() {
  const [data, setData] = useState({});
  const [userLocation, setUserLocation] = useState({});
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
    if (city) {
      setFinnal(city);
    } else {
      setFinnal(["Add your location"]);
    }
  }, []);

  



useEffect(() => {
    setIsInformationLoading(true);
    navigator.geolocation.getCurrentPosition(
      function (position) {
       const  newUserPos = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
       };
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${newUserPos.lat}&lon=${newUserPos.long}&appid=9eecc962315d7d019a25cb291a4e5b3a`).then((response) => {
      setData(response.data);
      setUserLocation(response.data);
    });
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
    
  
    setIsInformationLoading(false);
  }, []);


  useEffect(() => {
    const database = JSON.parse(localStorage.getItem("Data"));
    if (database) {
      setData(database);
    }
  }, []);

useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(data));
  }, [data]);


  useEffect(() => {
    localStorage.setItem("City", JSON.stringify(finnal));
  }, [finnal]);

  

  return (
    <>
      <Header />
      <Navigation
      userLocation={userLocation}
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
