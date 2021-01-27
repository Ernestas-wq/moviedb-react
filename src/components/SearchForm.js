import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { searchMovie } = useGlobalContext();
  const [searchValue, setSearchValue] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    searchMovie(searchValue);
    console.log(searchValue);
  };
  return (
    <section className="search">
      <form action="" className="search__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="search"
          onChange={e => setSearchValue(e.target.value)}
        />
        <button type="submit" className="search__submit">
          <FaSearch />
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
