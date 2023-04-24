import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShowCard from "./components/ShowCard";
import TarotCard from "./components/TarotCard";
import useStore from "./store/store";
import Nothing from "./components/Nothing";

function App() {
  const { data, fetchData, endpointUrl } = useStore();
  const nothing = (data.nhits === 0) | (data.length === 0);
  React.useEffect(() => {
    fetchData("https://tarot-api-es.vercel.app/api/v1/random?&n=9");
  }, [fetchData]);
  return (
    <div className='App'>
      <Navbar />
      <ShowCard
        // data={data}
        url={endpointUrl}
        numOfCards={data.nhits ? data.nhits : data.length}
      />
      <main
        id='Container'
        className='grid pb-8 bg-neutral-100 grid-flow-row md:grid-cols-3 sm:grid-cols-1 
        gap-3 justify-items-center dark:bg-indigo-950'
      >
        {data.cards &&
          data.cards.map((card) => (
            <TarotCard
              key={card.name_short + "carta" + card.value}
              card={card}
            />
          ))}
        {!data.cards &&
          data.map((card) => (
            <TarotCard
              key={card.name_short + "carta" + card.value}
              card={card}
            />
          ))}
        {nothing && <Nothing />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
