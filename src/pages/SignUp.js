import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

const SignUp = () => {
  const { setIsHomeOpen } = useGlobalContext();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsHomeOpen(false);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [showMessage]);

  const handleSubmit = e => {
    e.preventDefault();
    setShowMessage(true);
  };
  return (
    <main>
      <section className="signup">
        <h1>Welcome, we are glad you decide to sign up</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" autoComplete="off" required id="username" />
            <label htmlFor="username" className="label-name">
              <span className="content-name">Enter your username</span>
            </label>
          </div>
          <div className="input-container">
            <input type="text" autoComplete="off" required id="email" />
            <label htmlFor="email" className="label-name">
              <span className="content-name">Enter your email</span>
            </label>
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
        {showMessage && (
          <div className="signup__message">
            <p>I'm sorry, this doesn't actually do anything!</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default SignUp;
