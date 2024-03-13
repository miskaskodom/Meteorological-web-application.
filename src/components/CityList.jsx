import React from "react";

const CityList = ({ finnal, currentCity, handleDelete }) => {
  return (
    <div className=" w-96 bg-[#00665E] mt-3 rounded-2xl">
      <h1 className="text-white">Saved location</h1>
      <div className=" w-96 h-max p-4">
        {finnal.length > 0 &&
          finnal.map((City, index) => {
            return (
              <div
                onClick={() => currentCity(City)}
                key={index}
                className="flex flex-row cursor-pointer hover:bg-[#33cec4e0] text-white  bg-[#33CEC3] p-2 justify-between border-b-4 border-[#00665E] rounded-2xl"
              >
                {City}
                <button onClick={() => handleDelete(City)}> X</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CityList;
