import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = data => {
  const reviews = data;
  return (
    <>
      {reviews.data && reviews.data.length ? (
        reviews.data.map(review => (
          <div key={review.id}>
            <h3> {review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p> Sorry, no reviews have been added yet</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  data: PropTypes.array,
};

export default ReviewsList;