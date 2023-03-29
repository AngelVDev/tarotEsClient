import React, { Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import TarotCard from "./components/TarotCard";
import { fetchData } from "./helper/fetchData";

const tarotSearch = fetchData(
  `https://tarotapispanish.onrender.com/api/v1/cards/search?q=dios`
);
function App() {
  const data = tarotSearch.read();

  return (
    <div className='App'>
      <Navbar />
      <main
        id='Container'
        className='grid grid-flow-row grid-cols-3 gap-3 justify-items-center bg-indigo-950'
      >
        <Suspense fallback={Loading}>
          {data.cards.map((card) => (
            <TarotCard
              key={card.name_short + "carta" + card.value}
              card={card}
            />
          ))}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
