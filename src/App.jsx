import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import WeatherAppPage from "./pages/WeatherAppPage";
import AboutApp from "./pages/AboutApp";
import Setting from "./pages/Settings";

function App() {
  return (
    <BrowserRouter basename="/Meteorological-web-application./">
      <Routes>
        <Route path="*" element={<StartPage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mainapp" element={<WeatherAppPage />} />
        <Route path="/aboutapp" element={<AboutApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
