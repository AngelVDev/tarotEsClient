import React, { useState } from "react";
import DownArrow from "../../assets/DownArrow";
import useStore from "../../store/store";
import { palosPath } from "../../helper/baseUrl";
import CloseCross from "../../assets/CloseCross";

const palos = [
  {
    name: "Oros",
    path: palosPath + "/oros",
  },
  { name: "Bastos", path: palosPath + "/bastos" },
  { name: "Espadas", path: palosPath + "/espadas" },
  { name: "Copas", path: palosPath + "/copas" },
];

function Palos() {
  const [showMenu, setShowMenu] = useState(false);
  const { fetchData } = useStore();

  return (
    <div className='relative'>
      <button
        id='dropdownHoverButton'
        type='button'
        className='inline-flex items-center justify-center w-full transition-all
        h-16 px-4 text-sm font-medium text-gray-700 dark:text-gray-100 
        bg-transparent rounded-md hover:bg-[#c068ff86]'
      >
        Palos
        <span
          className='inline-flex w-full ml-2 p-3 hover:bg-[#3e1e5586] hover:rounded-l transition-all'
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu === false ? <DownArrow /> : <CloseCross />}
        </span>
      </button>
      {showMenu && (
        <ul
          id='dropdownHover'
          onMouseDown={() => setShowMenu(true)}
          onMouseLeave={() => setTimeout(() => setShowMenu(false), 50)}
          className='absolute transition-all z-10 p-1 mt-2 overflow-hidden 
          bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5'
        >
          <li
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {palos.map((palo) => (
              <button
                key={palo.name}
                className='px-4 py-2 text-sm
                text-gray-700 dark:text-gray-100 hover:bg-[#c068ff86]'
                role='menuitem'
                onClick={() => fetchData(palo.path)}
              >
                {palo.name}
              </button>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Palos;
