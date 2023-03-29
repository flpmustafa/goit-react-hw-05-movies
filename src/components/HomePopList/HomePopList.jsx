import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'components/HomePopList/HomePopList.module.css';

const FilmsList = ({ filmsItem, location  }) => {
  return (
    <>
      {filmsItem &&
        filmsItem.map(film => (
          <li key={film.id}
            className={css.item_home}>
          
            <NavLink
              className={css.item_home_link}
              to={`/movies/${film.id}`}
              state={{ from: location }}>
              {film.poster_path  &&  film.poster_path === null ? (
                <img
                  className={css.img_home}
                  src={
                    `https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`
                  }
                  alt={film.title}
                  width="350"
                />
              ) : (
                <img
                  className={css.img_home}
                  src={
                    `https://image.tmdb.org/t/p/original/${film.poster_path}`
                  }
                  alt={film.title}
                  width="350"
                />
              )}
              <p className={css.title_home}>{film.title || film.name}</p>
            </NavLink>
          </li>
        ))
      }
    </>
  )
  }


FilmsList.propTypes = {
  films: PropTypes.array,
};
  

export default FilmsList;