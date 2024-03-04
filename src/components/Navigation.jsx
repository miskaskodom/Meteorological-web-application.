import React from "react";

const Navigation = () => {
    return(
        <div className=" w-full h-20 flex flex-row items-center justify-start bg-slate-200 pl-4">
               <input placeholder="Sity" className=" h-7"/>
            <div className=" flex flex-row gap-60">
                <a href="#">One</a>
                <a href='#'>Two</a>
            </div>
        </div>
    )
}

export default Navigation;