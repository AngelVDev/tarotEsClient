import React from "react";

const Burger = (nav) => {
  return (
    <ul
      className={
        nav &&
        "absolute top-0 left-0 w-full h-screen bg-indigo-950 md:hidden flex flex-col justify-center items-center font-bold"
      }
    >
      <li className='pb-6 text-5xl'>Reset</li>
      <li className='py-6 text-5xl'>Corte</li>
      <li className='py-6 text-5xl'>Palos</li>
      <li className='py-6 text-5xl'>Arcanos mayores</li>
      <li className='py-6 text-5xl'>Arcanos menores</li>
    </ul>
  );
};

export default Burger;
