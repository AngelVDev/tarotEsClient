import React from "react";
import useStore from "../../store/store";
import Corte from "./Corte";
import Palos from "./Palos";
import Searchbar from "./Searchbar";
import { arcanosMayoresPath, arcanosMenoresPath } from "../../helper/baseUrl";

function Navbar() {
  const { fetchData } = useStore();
  return (
    <nav
      className='bg-stone-100 dark:bg-gray-800 dark:text-gray-100 p-4
      '
    >
      <div className='container md:flex justify-between h-16 mx-auto'>
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
          className='flex hover:bg-[#c068ff86] transition-all
              rounded-md items-center px-4 -mb-1 border-y-2 dark:border-y-amber-400'
        >
          Reiniciar
        </a>
        <a
          rel='noopener noreferrer'
          href='/'
          aria-label='Back to homepage'
          className='flex items-center p-3 bg-violet-900 rounded-xl text-slate-200'
        >
          <strong>Tarot API ES</strong>
        </a>
        <Searchbar />
      </div>
    </nav>
  );
}

export default Navbar;
