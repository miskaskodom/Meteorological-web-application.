import React from "react";

const Navigation = ({ serchLocation, location, setLocation,finnal }) => {
    
  return (
    <div className=" w-full h-20 flex flex-row items-center justify-start bg-slate-200 pl-4">
      <input
      list='cars'
      name='cars'
        placeholder="Enter your city"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={serchLocation}
        className=" h-7"
      />
      <datalist id='cars'>
      {finnal.map(item => (
            <option key={item} value={item}>{item}</option>
        ))}
      </datalist>
      
    </div>
  );
};

export default Navigation;
