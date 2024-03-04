import React from "react";
import logo from '../assets/logo.png'

const Header = () => {
    return(
        <div className=" flex bg-slate-300  w-full h-20 items-center pl-4">
                <img className=' w-64'  src={logo}/>
        </div>
    )
}

export default Header;