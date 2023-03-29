import React, { Suspense } from 'react';
import Spinner from 'components/Loader/Spinner';
import { DebounceInput } from 'react-debounce-input';
import { getFilmsSeach } from 'servises/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearch from 'components/MoviesList/MoviesList';
import css from 'pages/Movies/Movies.module.css';
import cssPop from 'pages/Home/Home.module.css';


const Movies = () => {
    // eslint-disable-next-line
    const [movie, setMovie] = useState(null);
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('name') ?? '';

    useEffect(() => {
        if (!query) return;
        getFilmsSeach(query)
            .then(setMovies)
            .catch(function (error) {
                console.log('Error: ' + error);
                console.log(getFilmsSeach(query));
            });
    }, [query]);

    const handleSubmit = evt => {
        evt.preventDefault();
         setMovie(query);
    }

    return (
        <>
            <form className={css.movies} onSubmit={handleSubmit}>
                <DebounceInput
                    debounceTimeout={500}
                    className={css.inpum_movies}
                    type="text"
                    value={query}
                    onChange={evt => setSearchParams({ name: evt.target.value })}
                    placeholder="Search movies"
                    autoComplete="off"
                    autoFocus
                />
            </form>
            
            <ul className={cssPop.list_home}>
                <Suspense fallback={<Spinner />}>
                    <MovieSearch query={query} movies={movies} />
                </Suspense>
            </ul>
        </>
    )
}

export default Movies;