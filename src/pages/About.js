import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import bg from '../assets/images/bg-2.jpg';
const About = () => {
  return (
    <>
      <header style={{ backgroundImage: `url(${bg})` }}>
        <div className="header">
          <h1>
            <Typewriter
              options={{
                strings: ['THE ABOUT PAGE'],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="header__blink"></div>
          </h1>
        </div>
      </header>
    </>
  );
};

export default About;
