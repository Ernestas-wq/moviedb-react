import React, { useEffect } from 'react';
import bg from '../assets/images/bg-1.jpg';
import Typewriter from 'typewriter-effect';
import SearchForm from '../components/SearchForm';
import Movies from '../components/Movies';
import { useGlobalContext } from '../context';
const Home = () => {
  const { setIsHomeOpen } = useGlobalContext();
  useEffect(() => {
    setIsHomeOpen(true);
  }, []);
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
      <main>
        <SearchForm />
        <Movies />
      </main>
    </>
  );
};

export default Home;
