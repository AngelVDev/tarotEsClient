import React from "react";

function TarotCard(data) {
  const card = data.card;
  return (
    <div
      className='max-w-xl p-6 h-full rounded-md shadow-md 
        dark:bg-gray-900 dark:text-gray-50 w-2/4 object-center'
    >
      <article key={card.name_short} className='text-xs space-y-2'>
        <img
          className='object-cover object-center w-full rounded-md h-4/6 dark:bg-gray-500'
          src={card.image}
          alt={card.name + "carta" + card.value}
        />
        <header className='text-center text-xl'>{card.name}</header>
        <p>Significado: {card.meaning_up}</p>
        <p>Significado al revés: {card.meaning_rev}</p>
        <details>
          <summary>En el trabajo:</summary>
          <p>{card.trabajo}</p>
        </details>
        <details>
          <summary>En el amor: </summary>
          <p>{card.amor}</p>
        </details>
        <details>
          <summary>En las finanzas: </summary>
          <p>{card.finanzas}</p>
        </details>
        <details>
          <summary>En la espiritualidad: </summary>
          <p>{card.espiritualidad}</p>
        </details>
        <details>
          <summary>En la salud: </summary>
          <p>{card.salud}</p>
        </details>
        <details>
          <summary>Descripción de imagen: </summary>
          <p>{card.desc}</p>
        </details>
      </article>
    </div>
  );
}

export default TarotCard;
