import React from "react";
import useStore from "../../store/store";
import Corte from "./Corte";
import Palos from "./Palos";
import Searchbar from "./Searchbar";

const arcanosMayoresPath =
  "https://tarotapispanish.onrender.com/api/v1/cards/type/mayor";
const arcanosMenoresPath =
  "https://tarotapispanish.onrender.com/api/v1/cards/type/menor";

function Navbar() {
  const { fetchData } = useStore();
  return (
    <header
      className='light:bg-gradient-to-b from-indigo-200  to-neutral-100 p-4 
    dark:bg-gray-800 dark:text-gray-100'
    >
      <div className='container flex justify-between h-16 mx-auto'>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          <Corte />
          <Palos />
          <li className='flex'>
            <button
              onClick={() => fetchData(arcanosMayoresPath)}
              className='flex hover:bg-[#c068ff86] transition-all
              rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Arcanos mayores
            </button>
          </li>
          <li className='flex'>
            <button
              onClick={() => fetchData(arcanosMenoresPath)}
              className='flex hover:bg-[#c068ff86] transition-all
              rounded-md items-center px-4 -mb-1 border-b-2 dark:border-transparent'
            >
              Arcanos menores
            </button>
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
