import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
const Error = () => {
  const { setIsHomeOpen } = useGlobalContext();
  useEffect(() => {
    setIsHomeOpen(false);
  }, []);
  return (
    <section className="error">
      <div className="error__container">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
