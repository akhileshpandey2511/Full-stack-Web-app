import React from "react";
import logo from './logo.svg';

const Header=()=>{
    return(
        <div className="App bg-red-950">

      <div className="flex justify-between p-0">
        <header className="App-header flex justify-start items-start">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo" 
          />
        </header> 
        <p className="text-lg font-bold text-white p-2">My Application</p>
        <header className="App-header flex justify-end items-start">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo" 
          />
        </header> 
      </div>
{/* 
      <div className="flex justify-between p-0">
        <header className="App-header flex justify-start items-end">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo" 
          />
        </header>
        <header className="App-header flex justify-end items-end">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo" 
          />
        </header>
      </div> */}
    </div>
    )
}

export default Header