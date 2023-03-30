import React from "react";

function TarotCard(data) {
  const card = data.card;
  return (
    <article
      className='max-w-xl mt-4 pt-4 px-4 pb-2 content-around h-full rounded-md shadow-md 
        dark:bg-gray-900 dark:text-gray-50 w-4/6 text-xs space-y-2'
    >
      <img
        className='object-cover object-center w-full rounded-md dark:bg-gray-500'
        src={card.image}
        alt={card.name + "carta" + card.value}
      />
      <header className='text-center text-xl'>{card.name}</header>
      <p>Significado: {card.meaning_up}</p>
      <p>Significado al revés: {card.meaning_rev}</p>
      <section>
        <details className='py-2 content-around'>
          <summary>En el trabajo:</summary>
          <p>{card.trabajo}</p>
        </details>
        <details className='py-2 content-around'>
          <summary>En el amor: </summary>
          <p>{card.amor}</p>
        </details>
        <details className='py-2 content-around'>
          <summary>En las finanzas: </summary>
          <p>{card.finanzas}</p>
        </details>
        <details className='py-2 content-around'>
          <summary>En la espiritualidad: </summary>
          <p>{card.espiritualidad}</p>
        </details>
        <details className='py-2 content-around'>
          <summary>En la salud: </summary>
          <p>{card.salud}</p>
        </details>
        <details className='py-2 content-around'>
          <summary>Descripción de imagen: </summary>
          <p>{card.desc}</p>
        </details>
      </section>
    </article>
  );
}

export default TarotCard;
