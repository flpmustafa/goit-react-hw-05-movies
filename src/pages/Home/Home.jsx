import React, { Suspense, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from 'components/Loader/Spinner';
import { getFilmsTrends } from 'servises/api';
import FilmsList from 'components/HomePopList/HomePopList';
import css from 'pages/Home/Home.module.css';

const Home = () => {
  const [films, setFilms] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    getFilmsTrends()
      .then(setFilms)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, []);
    
  return (
    <main>
      <h1 className={css.h1_home}>🍿 Popular films today 🍿</h1>
      <ul className={css.list_home}>
         <Suspense fallback={<Spinner />}>
          <FilmsList filmsItem={films}  location={location}/>
         </Suspense>
        </ul>
    </main>
    )
}

export default Home;