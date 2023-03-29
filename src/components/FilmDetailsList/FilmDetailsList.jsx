import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMoveDetails } from 'servises/api';
import css from 'components/FilmDetailsList/FilmDetailsList.module.css';

const MovieDetailsList = () => {
  const location = useLocation();
  const [moviesId, setIdInfo] = useState(null);
  const { id } = useParams();
  //console.dir(moviesId.genres);

  useEffect(() => {
    getMoveDetails(id)
      .then(setIdInfo)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {moviesId && (
        <>
          <div>
            <h2>
              {moviesId.title} ({moviesId.release_date.slice(0, 4)})
            </h2>
            <p className={css.raite}>
              {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
            </p>

            {moviesId.poster_path === null ? (
             <img
                 className={css.img_details}
                 src={`https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`}
                 alt={moviesId.title}/>
            ): (
                <img
                className={css.img_details}
                src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`}
                alt={moviesId.title}
              />
            )}
          </div>

          <div className={css.info}>
            <h3 className={css.overview}>Overview:</h3>
            <p>{moviesId.overview}</p>
            <h3>Genres:</h3>
            <ul>
              {moviesId.genres.map(genre => (
                <li key={genre.genre_id}>{genre.name}</li>
              ))}
            </ul>

            <div className={css.btn_block}>
              <NavLink
                className={css.link_details}
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: 'hsl(20, 100%, 47%)',
                      }
                    : { backgroundColor: 'hsla(20, 100%, 47%, 0.322)' }
                }
                to={`/movies/${id}/reviews`}
                state={location.state}
              >
                Reviews
              </NavLink>
              <NavLink className={css.link_details}
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: 'hsl(20, 100%, 47%)',
                      }
                    : { backgroundColor: 'hsla(20, 100%, 47%, 0.322)' }
                }
                to={`/movies/${id}/cast`}
                state={location.state}
              >
                Cast
              </NavLink>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsList;