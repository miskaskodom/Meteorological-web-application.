import React from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import WeatherAppPage from "./pages/WeatherAppPage";
import AboutApp from "./pages/AboutApp";
import Setting from "./pages/Settings";

function App() {
  return (
    <HashRouter basename="/Meteorological-web-application./">
      <Routes>
        <Route path="*" element={<StartPage />} />
        <Route basename='/Meteorological-web-application./setting' path="/setting" element={<Setting />} />
        <Route path="/mainapp" element={<WeatherAppPage />} />
        <Route path="/aboutapp" element={<AboutApp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
