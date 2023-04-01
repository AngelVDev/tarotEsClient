import React, { useState } from "react";
import DownArrow from "../../assets/DownArrow";

const palos = [
  {
    name: "Oros",
    path: "/",
  },
  { name: "Bastos", path: "/" },
  { name: "Espadas", path: "/" },
  { name: "Copas", path: "/" },
];

function Palos() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='relative'>
      <button
        id='dropdownHoverButton'
        type='button'
        className='inline-flex items-center justify-center w-full 
        h-16 px-4 text-sm font-medium text-gray-700 dark:text-gray-100 
        bg-transparent rounded-md hover:bg-[#c068ff86]'
        onMouseEnter={() => setShowMenu(true)}
      >
        Palos
        <DownArrow />
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
              <a
                key={palo.name}
                href={palo.path}
                className='px-4 py-2 text-sm
                text-gray-700 dark:text-gray-100 hover:bg-[#c068ff86]'
                role='menuitem'
              >
                {palo.name}
              </a>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Palos;
