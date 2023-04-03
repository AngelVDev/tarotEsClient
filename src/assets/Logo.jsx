import React from "react";
import logo from "./logo.svg";

function Logo() {
  return (
    <div
      className='flex items-center hover:bg-violet-200
    transition duration-300 justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400'
    >
      <img
        src={logo}
        className='p-0.5'
        alt="developer's logo in SVG extension"
      />
    </div>
  );
}

export default Logo;
