import React from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const noImageSub = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { isLoading, movies } = useGlobalContext();
  console.log(movies);
  if (isLoading) return <Loading />;

  return (
    <section className="movies">
      {movies.map(movie => {
        const { imdbID: id, Poster: img, Title: title, Year: year } = movie;
        return (
          <Link className="movies__item" key={id} to={`/movies/${id}`}>
            <article>
              <img src={img === 'N/A' ? noImageSub : img} alt={title} />
              <div className="movies__info">
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
      {/* <Link className="movies__item">
        <article>
          <img src={noImageSub} alt="" />
          <div className="movies__info">
            <h4 className="movies__title">Some title 300</h4>
            <p>1000</p>
          </div>
        </article>
      </Link> */}
    </section>
  );
};

export default Movies;
