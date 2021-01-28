import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import SingleMovie from './components/SingleMovie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movies/:id">
          <SingleMovie />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
