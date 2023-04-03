/* eslint-disable react/prop-types */
import React, { useState } from "react";

function ShowCard(props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    // eslint-disable-next-line react/prop-types
    navigator.clipboard.writeText(props.url);
    setIsCopied(true);
  };

  return (
    <section
      className='flex flex-col bg-neutral-100 items-center space-y-2 h-fit dark:text-gray-100 dark:bg-gradient-to-b
    from-gray-800 to-indigo-950 p-4'
    >
      <legend className='text-base font-medium'>Endpoint</legend>
      <fieldset className='space-x-1'>
        <span className='px-2 text-sm bg-indigo-100 dark:bg-gray-600 rounded-l-md'>
          https://
        </span>
        <input
          type='text'
          name='url'
          defaultValue={props.url.split("https://")[1]}
          className='text-gray-900 border-gray-300 w-max
             rounded-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm'
        />
      </fieldset>
      <details>
        <summary>Descripción</summary>
        <p>
          <strong>?type= </strong>
          especifica los tipos de arcanos
          <i> (en éste caso no se está usando).</i>
        </p>
        <p>
          <strong>?n= </strong>
          especifica la cantidad de cartas a mostrar.
        </p>
      </details>
      <button
        onClick={copyToClipboard}
        className='p-2 
            border border-transparent shadow-sm text-sm font-medium rounded-md transition-all
            dark:text-white dark:bg-violet-600 bg-indigo-100
            dark:hover:bg-violet-700 hover:bg-violet-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'
      >
        {isCopied ? "Copiado" : "Copiar endpoint"}
      </button>
      <span className='px-2 text-md bg-stone-200 dark:bg-gray-600 rounded-md'>
        Cantidad de cartas: {props.numOfCards}
      </span>
    </section>
  );
}

export default ShowCard;
