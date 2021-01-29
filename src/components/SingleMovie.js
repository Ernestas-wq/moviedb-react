import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import useFetchMovies from '../utils/useFetchMovies';
const noImageSub = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const randomPrice = (Math.random() * 30).toFixed(2);

  const [price, setPrice] = useState(randomPrice);
  const { setIsHomeOpen, cart, addToCart } = useGlobalContext();
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetchMovies(`&i=${id}`);

  useEffect(() => {
    setIsHomeOpen(false);
    setPrice(randomPrice);
  }, []);

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
          <button className="btn" onClick={() => addToCart({ id, title, img, price })}>
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
