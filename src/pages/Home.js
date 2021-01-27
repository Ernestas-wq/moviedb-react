import React, { useState, useRef } from 'react';
import Loading from '../components/Loading';
import bg from '../assets/images/bg-1.jpg';
import Typewriter from 'typewriter-effect';
import SearchForm from '../components/SearchForm';
import Movies from '../components/Movies';
const Home = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${bg})` }}>
        <div className="header">
          <h1>
            <Typewriter
              options={{
                strings: ['THE SO FUN MOVIE DB'],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="header__blink"></div>
          </h1>
        </div>
      </header>
      <SearchForm />
      <Movies />
    </>
  );
};

export default Home;
