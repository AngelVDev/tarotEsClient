import React from "react";
import useStore from "../../store/store";

const baseURL = "https://tarotapispanish.onrender.com/api/v1/cards";

function Searchbar() {
  const [search, setSearch] = React.useState("");
  // const [query, setQuery] = React.useState("");

  const { fetchData } = useStore();

  const tarotSearch = (word) =>
    fetchData(
      baseURL + `/search?q=${word}`
      // baseURL + `/search?${query}=${word}`
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    tarotSearch(search);
  };
  return (
    <div className='flex items-center md:space-x-4'>
      <form onSubmit={handleSubmit} className='relative'>
        {/* <select
          className='dark:text-gray-900'
          onSelect={(e) => setQuery(e.target.value)}
        >
          <option value='q'>Todo</option>
          <option value='meaning'>Al derecho</option>
          <option value='meaning_rev'>Al revés</option>
        </select> */}
        <input
          type='search'
          name='Search'
          placeholder='Buscar...'
          onChange={(e) => setSearch(e.target.value)}
          className='w-32 py-2 pl-10 text-sm rounded-md 
              sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 
              focus:dark:bg-gray-900'
        />
      </form>
      <button
        type='submit'
        className='hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900'
      >
        Buscar
      </button>
    </div>
  );
}

export default Searchbar;
