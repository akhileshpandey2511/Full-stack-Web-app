import React from "react";
import logo from './logo.svg';

const Footer = () => {
  return (
    <div className="flex flex-col"> {/* Full height and no margin */}
      <div className="flex justify-between items-end w-full p-0"> {/* Align logos at the bottom */}
        <header className="App-header">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo"
          />
        </header>
        <header className="App-header">
          <img
            src={logo}
            className="App-logo w-12 h-12 bg-red-950"
            alt="logo"
          />
        </header>
      </div>
    </div>
  );
};

export default Footer;
