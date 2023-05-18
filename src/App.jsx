import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShowCard from "./components/ShowCard";
import TarotCard from "./components/TarotCard";
import useStore from "./store/store";
import Nothing from "./components/Nothing";
import { descriptor } from "./helper/descriptor";
import { randomUrl9 } from "./helper/baseUrl";

function App() {
  const { data, fetchData, endpointUrl } = useStore();
  React.useEffect(() => {
    fetchData(randomUrl9);
  }, [fetchData]);

  return (
    <div className='App'>
      <Navbar />
      <ShowCard
        url={endpointUrl}
        numOfCards={data.nhits}
        description={descriptor(endpointUrl)}
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
        {data.nhits === 0 ? <Nothing /> : null}
      </main>
      <Footer />
    </div>
  );
}

export default App;
