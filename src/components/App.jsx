import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Navigate from 'components/Navigation/Navigation';
import Spinner from './Loader/Spinner';


const Home = React.lazy(() => import('pages/Home/Home'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('pages/FilmDetails/FilmDetails'));
const ReviewsPage = React.lazy(() => import('pages/ReviewPage/ReviewPage'));
const CastPage = React.lazy(() => import('pages/CastPage/CastPage'));


export const App = () => {
  return (
    <>
      <Navigate />
      <Suspense fallback={<Spinner />}>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="/movies/:id/cast" element={<CastPage />}></Route>
          <Route path="/movies/:id/reviews" element={<ReviewsPage />}></Route>
        </Route>
      </Routes>
      </Suspense>
      
    </>
  );
};