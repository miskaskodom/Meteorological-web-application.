import React from "react";
import ModalSettings from "./ModalSettings.jsx";
import ModalAddCity from "./ModalAddCity.jsx";
import Setting from "../assets/icons8-settings-50.png";
import { useState } from "react";

const Navigation = ({ serchLocation, location, finnal, setLocation, removeCity,currentCity }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full h-20 flex flex-row items-center justify-between bg-slate-200 px-4">
      <button className="dive" onClick={() => setOpen(true)}>
        <p>+ Add city </p>

      </button>
      {//я хочу  select куда будут сохранятся города из инпута при нажатии соответсутвующей клавиши крч что-то подобное было в первых лекциях  и в модальное окно ебашить?
      }
      <ModalAddCity open={open} onClose={() => setOpen(false)}>
      <div className="text-center w-96 h-72  flex flex-col items-start font-mono text-2xl">
          <h1 className=" text-3xl font-bold">Settings</h1>
          <input
        placeholder="Enter your city"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        
        className="dive pl-4"
      />
      <button onClick={serchLocation}>Add</button>
        <div className=" w-80 h-max p-4">
          { finnal.map((City,index) =>(
             <div key={index} className="flex flex-row bg-slate-400 p-2 justify-between"> 
             <div className=' bg-violet-200' onClick={() => currentCity(City)}>{City}</div><button onClick={() => removeCity(index)}> X</button> 
            
 
              </div>

          ))}
        </div>
        </div>
      </ModalAddCity>




      <button className="dive" onClick={() => setOpenSetting(true)}>
        <p>Settings </p>
        <img src={Setting} />
      </button>
      <ModalSettings open={openSetting} onClose={() => setOpenSetting(false)}>
        <div className="text-center w-96 h-72 p-6 justify-between flex flex-col items-start font-mono text-2xl">
          <h1 className=" text-3xl font-bold">Settings</h1>

          <label>
            Presure <input readOnly type="checkbox" />
          </label>
          <label>
            Humadity <input readOnly type="checkbox" />
          </label>
          <label>
            Min temperature <input readOnly type="checkbox" />
          </label>
          <label>
            Max temperature <input readOnly type="checkbox" />
          </label>
        </div>
      </ModalSettings>
    </div>
  );
};

export default Navigation;
