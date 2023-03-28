import React from "react";
// import { fetchData } from "../../helper/fetchData";

function Searchbar() {
  // const [search, setSearch] = React.useState("");
  // const tarotSearch = (word) =>
  //   fetchData(
  //     `https://tarotapispanish.onrender.com/api/v1/cards/search?q=${word}`
  //   );
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   tarotSearch(search);
  // };

  return (
    <div className='flex items-center md:space-x-4'>
      {/* <form onSubmit={handleSubmit} className='relative'> */}
      <form className='relative'>
        <input
          type='search'
          name='Search'
          placeholder='Buscar...'
          // onChange={(e) => setSearch(e.target.value)}
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
