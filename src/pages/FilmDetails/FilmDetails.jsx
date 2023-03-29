import React, { Suspense } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Spinner from 'components/Loader/Spinner';
import MovieFilmDetails from 'components/FilmDetailsList/FilmDetailsList';
import css from 'pages/FilmDetails/FilmDetails.module.css';


const MovieDetails = () => { 
 const location = useLocation(); 
  const backLink = location.state?.from ?? '/movies';

  return (
    <section className={css.section_details}>
      <button className={css.button}>
        <NavLink 
          className={css.link}
          to={backLink}>
          🠔 Back to movie list
        </NavLink>
      </button>
      
      <h3 className={css.h3_movie}>Movie Details</h3>
      <div className={css.box_details}>
        <Suspense fallback={<Spinner />}>
          <MovieFilmDetails />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;