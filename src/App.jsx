import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import TarotCard from "./components/TarotCard";
import { fetchData } from "./helper/fetchData";

const tarotSearch = fetchData(
  `https://tarotapispanish.onrender.com/api/v1/random?&n=9`
);
function App() {
  const data = tarotSearch.read();

  return (
    <div className='App'>
      <Navbar />
      <main
        id='Container'
        className='grid pb-8 grid-flow-row md:grid-cols-3 sm:grid-cols-1 gap-3 justify-items-center bg-indigo-950'
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
      <Footer />
    </div>
  );
}

export default App;
