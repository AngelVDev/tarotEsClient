import React from "react";

function Nothing() {
  return (
    <article
      className='w-11/12 min-h-screen text-stone-800 dark:text-neutral-50
      place-self-center flex flex-col items-center justify-center 
     rounded-md border-cyan-200 border-2 m-auto'
    >
      <header className='text-3xl'>404</header>
      <p>No hay nada aún</p>
      <p>o no existen cartas con esa definición</p>
      <p className='text-xl text-zinc-500 dark:text-neutral-600'>
        (elemento proximamente centrado)
      </p>
    </article>
  );
}

export default Nothing;
