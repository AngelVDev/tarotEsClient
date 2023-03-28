import React from "react";
import Corte from "./Corte";
import Palos from "./Palos";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <header className='p-4 dark:bg-gray-800 dark:text-gray-100'>
      <div className='container flex justify-between h-16 mx-auto'>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          <Corte />
          <Palos />
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='/'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Arcanos mayores
            </a>
          </li>
          <li className='flex'>
            <a
              rel='noopener noreferrer'
              href='/'
              className='flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Arcanos menores
            </a>
          </li>
        </ul>
        <a
          rel='noopener noreferrer'
          href='/'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          Tarot API ES
        </a>
        <Searchbar />
      </div>
    </header>
  );
}

export default Navbar;
