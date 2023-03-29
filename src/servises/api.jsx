import axios from 'axios';
//const parameters
const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '29a0f9958f515e94b4a8a68d70519f1b';

//Trends
const trending = 'trending';
const mediaType = 'movie';
const timeWindow = 'day';

const getFilmsTrends = async () => {
  const filmsTrends = await axios.get(`
  ${API_URL}/${trending}/${mediaType}/${timeWindow}?api_key=${API_KEY}
  `);
  const trends = filmsTrends.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }  
      );
  return trends;
}

    // Move Details
const getMoveDetails = async id => {
  let moveId = await axios.get(`${API_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`);
  return moveId.data;
};

// Seach films
const search = 'search';
const getFilmsSeach = async query => { 
  const filmsSeach = await axios.get(`${API_URL}/${search}/${mediaType}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
  return filmsSeach.data.results;
}

// Cast
const getCasts = async id => {
  const casts = await axios.get(`${API_URL}/${mediaType}/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return casts.data;
};

// Review
const getReviews = async id => {
  const reviewsRes = await axios.get(`${API_URL}/${mediaType}/${id}/reviews?api_key=${API_KEY}`);
  const reviews = reviewsRes.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviews;
};

export { getFilmsTrends, getMoveDetails, getFilmsSeach, getCasts, getReviews };