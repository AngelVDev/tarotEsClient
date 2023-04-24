import React from "react";
import useStore from "../../store/store";
import { baseURL } from "../../helper/baseUrl";

function Searchbar() {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("");

  const { fetchData } = useStore();

  const tarotSearch = (params) => fetchData(baseURL + `/search?${params}`);

  const handleSubmit = (event) => {
    event.preventDefault();
    tarotSearch(`${query}=${search}`);
  };
  return (
    <div className='flex items-center md:space-x-4'>
      <form onSubmit={handleSubmit} className='relative'>
        <select
          className='rounded-md p-2 mr-2 hover:bg-[#c068ff86] transition-all
          hover:text-slate-100 bg-violet-400 text-slate-100 dark:text-gray-800'
          onChange={(e) => setQuery(e.target.value)}
        >
          <option value='q'>Todo</option>
          <option value='meaning'>Al derecho</option>
          <option value='meaning_rev'>Al revés</option>
        </select>
        <input
          type='search'
          name='Search'
          placeholder='Buscar...'
          onChange={(e) => setSearch(e.target.value)}
          className='w-32 py-2 pl-4 text-sm rounded-md 
              sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 
              focus:dark:bg-gray-900'
        />
      </form>
      <button
        type='submit'
        onClick={handleSubmit}
        className='hover:bg-violet-800 transition-all hover:text-slate-100 
        px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900'
      >
        Buscar
      </button>
    </div>
  );
}

export default Searchbar;
