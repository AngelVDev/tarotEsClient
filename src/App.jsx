import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import ShowCard from "./components/ShowCard";
import TarotCard from "./components/TarotCard";
import useStore from "./store/store";

function App() {
  const { data, fetchData, endpointUrl } = useStore();
  React.useEffect(() => {
    fetchData("https://tarotapispanish.onrender.com/api/v1/random?&n=9");
  }, [fetchData]);
  return (
    <div className='App'>
      <Navbar />
      <ShowCard
        url={endpointUrl}
        numOfCards={data.nhits ? data.nhits : data.length}
      />
      <main
        id='Container'
        className='grid pb-8 bg-slate-350 grid-flow-row md:grid-cols-3 sm:grid-cols-1 gap-3 justify-items-center dark:bg-indigo-950'
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
