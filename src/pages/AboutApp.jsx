import React from "react";
import { Link } from "react-router-dom";

const AboutApp = () => {
  return (
    <div className=" flex  flex-col  items-center pt-36">
      <div className=" bg-[#00665e] p-16 rounded-3xl text-center shadow-2xl shadow-[#00665e]  ">
        {" "}
        <div className="bg-slate-200 p-4 rounded-2xl">
          <div className="text-center font-mono text-2xl ">
            <h1 className="font-bold">
              Weather application implemented using the one-page application
              principle.
            </h1>
            <p>
              1. As a user, I should be able to see the weather and the name of
              my location based on my current coordinates.
            </p>
            <p>
              2. As a user I should be able to add a city and see the weather
              there
            </p>{" "}
            <p>3. As a user I should be able to switch between saved cities.</p>{" "}
            <p>4. As a user I should be able to delete a city.</p>{" "}
            <p>
              {" "}
              5. As a user, I should have a settings page where I can further
              add options to the weather display, such as sunset time, humidity,
              perceived temperature.
            </p>{" "}
            <p>
              6. As a user I should be able to search through saved cities
            </p>{" "}
            <p>
              7. As a user, after reloading the page, I should see a list of
              saved cities and saved data from the settings page.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 p-4 rounded-2xl mt-11">
          <Link to="/" className="dive">
            Back to main page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
