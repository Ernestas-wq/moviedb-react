import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import { ImCheckboxChecked } from 'react-icons/im';
import Loading from './Loading';
import useFetchMovies from '../utils/useFetchMovies';
const noImageSub = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const randomPrice = (Math.random() * 30).toFixed(2);
  const [price, setPrice] = useState(randomPrice);
  const [showAlert, setShowAlert] = useState(false);
  const { setIsHomeOpen, addToCart } = useGlobalContext();
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetchMovies(`&i=${id}`);

  useEffect(() => {
    setIsHomeOpen(false);
    setPrice(randomPrice);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  const handleClick = () => {
    addToCart({ id, title, img, price });
  };

  if (isLoading) return <Loading />;
  if (error.show) return <h1>Error</h1>;
  const {
    Awards: awards,
    Country: country,
    Genre: genre,
    Released: release,
    Director: director,
    imdbRating: rating,
    imdbVotes: votes,
    Poster: img,
    Title: title,
  } = movie;
  return (
    <main>
      <section className="movie">
        <Link to="/" className="btn">
          back home
        </Link>
        <h2 className="movie__title">{title}</h2>
        <div className="movie__container">
          <img src={img === 'N/A' ? noImageSub : img} alt={title} />
          <div className="movie__info">
            <p>
              <span className="movie__data">director :</span>
              {director}
            </p>
            <p>
              <span className="movie__data">awards :</span>
              {awards}
            </p>
            <p>
              <span className="movie__data">country :</span>
              {country}
            </p>
            <p>
              <span className="movie__data">release :</span>
              {release}
            </p>
            <p>
              <span className="movie__data">rating :</span>
              {rating}
            </p>
            <p>
              <span className="movie__data">genre :</span> {genre}
            </p>
            <p>
              <span className="movie__data">votes :</span> {votes}
            </p>
            <p>
              <span className="movie__data">price: </span>${price}
            </p>
            <button
              className="btn"
              onClick={() => {
                if (!showAlert) {
                  addToCart({ id, title, img, price });
                }
                setShowAlert(true);
              }}
            >
              Add To Cart
            </button>
            <Link to="/cart" className="btn">
              view cart
            </Link>

            <div className={`${showAlert ? 'movie__alert movie__alert--active' : 'movie__alert'}`}>
              <p>
                Added to cart <ImCheckboxChecked />
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleMovie;
