import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Cast/Cast.module.css';


const CastList = data => {
  const cast = data;

  return (
    <ul className={css.list_cast}>
      {cast.data && cast.data.length ? (
        cast.data.map(cast => (
          <li key={cast.id}
            className={css.item_cast}
          >
            { cast.profile_path === null ? (
              <img
                className={css.img_cast}
                src={`https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`}
                alt={cast.name} />
            ) : (
                <img
                className={css.img_cast}
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                />
            )
              
            }
            <p className={css.cast_name}>{cast.name}</p>
            <p className={css.cast_descr}>Character: {cast.character}</p>
          </li>
        ))
      ) : (
          <li key="noInfo">Sorry, no cast has been added yet</li>
      )}
    </ul>
  );
};

CastList.propTypes = {
  data: PropTypes.array,
};

export default CastList;