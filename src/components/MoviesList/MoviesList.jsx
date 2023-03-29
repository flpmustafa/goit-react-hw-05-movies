import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from 'components/HomePopList/HomePopList.module.css';

const MovieSearch = ({ query, movies }) => {
  return (
    <>
      {movies &&
        movies.map((move) => {
          return (
            <li key={move.id}
              className={css.item_home}>
              <NavLink
                className={css.item_home_link}
                to={`/movies/${move.id}`}
                state={{ from: `/movies?name=${query}` }}
                > 
                {move.poster_path === null ? (
                <img
                  className={css.img_home}
                  src={`https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`}
                  alt={move.title}
                  />
                ) : (
                    <img
                  className={css.img_home}
                  src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
                  alt={move.title}
                />
                ) 
                
                }
                
                
                <p className={css.title_home}>{move.title}</p>  
              </NavLink>
            </li>
          );
        })}
    </>
  );
}
      
MovieSearch.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};
export default MovieSearch;

