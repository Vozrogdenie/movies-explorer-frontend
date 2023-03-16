import React, { useState, useEffect } from 'react';
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import api from '../../utils/MainApi';
import Preloader from './Preloader/Preloader';

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cardCounter, setCardCounter] = useState(0);

    useEffect(() => {
        setIsLoading(true)
        api.getMoviesCards().then(data => {
            setMovies(data);
            setCardCounter(getInitCounter(window.innerWidth));
            getMoviesToShow(props.isSearchPerformed, props.isFound, data);
        }).finally(() => {setIsLoading(false)});
        api.getSavedMoviesCards().then(resp => {
            setSavedMovies(resp.data);
        });
    }, []);

    useEffect(() => {
        getMoviesToShow(props.isSearchPerformed, props.isFound)
    }, [props.foundMovies]);

    const saveMovie = (movie) => {
        api.saveMovie(movie).then(resp => {
            setSavedMovies([...savedMovies, resp.data]);
        }).catch(err => {
            console.log(err);
        });
    };

    const deleteSavedMovie = (movie_id) => {
        api.removeMovieFromSaved(movie_id).then(() => {
            api.getSavedMoviesCards().then(resp => {
                setSavedMovies(resp.data);
            });
        }).catch(err => {
            console.log(err);
        });
    };
    
    const loadMore = () => {
        const width = window.innerWidth;
        setCardCounter(getCounter(width));
        if (props.isSearchPerformed && props.isFound) {
            setMoviesToShow(props.foundMovies.slice(0, getCounter(width)));
        } else {
            setMoviesToShow(movies.slice(0, getCounter(width)));
        };
    };

    const getInitCounter = (width) => {
        if (width >= 1280) {
            return 12;
        } else if (width >= 480 && width < 1280) {
            return 8;
        } else if (width < 480) {
            return 5;
        };
    };

    const getCounter = (width) => {
        if (width >= 1280) {
            return cardCounter+3;
        } else if (width < 1280) {
            return cardCounter+2;
        };
    };

    const getMoviesToShow = (isSearchPerformed, isFound, movies) => {
        let arr = [];
        if (isSearchPerformed && isFound) {
            arr = props.foundMovies.slice(0, getInitCounter(window.innerWidth));
        } else if (movies) {
            arr = movies.slice(0, getInitCounter(window.innerWidth));
        };
        setCardCounter(getInitCounter(window.innerWidth));
        setMoviesToShow(arr);
    }

    return(
        <div id="movies">
        <Header
        link={'Фильмы'}
        linkTwo={'Сохранненые фильмы'}
        accaunt={'Аккаунт'}
        loggedIn={props.loggedIn}
    />
        
        <SearchForm submitSearch={props.submitSearch} movies={movies}/>
        <FilterCheckbox/>
        <Preloader isLoading={isLoading}/>
        <MoviesCardList
            movies={moviesToShow}
            isSearchPerformed={props.isSearchPerformed}
            isFound={props.isFound}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            deleteSavedMovie={deleteSavedMovie}
            loadMore={loadMore}
            hasMore={(props.foundMovies.length ? props.foundMovies : moviesToShow).slice(0, cardCounter).length < (props.foundMovies.length ? props.foundMovies : movies).length}
        />
        </div>
    )
}
export default Movies;