import React, { useState, useEffect } from 'react';
import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import api from '../../utils/MainApi';
import Preloader from './Preloader/Preloader';
import { forty_minutes } from '../../utils/const';
import { four_hundred_and_eighty_minutes } from '../../utils/const';
import { one_thousand_two_hundred_and_eighty_minutes } from '../../utils/const';

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [cardCounter, setCardCounter] = useState(0);
    const [isShortOnly, setIsShortOnly] = useState();
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setIsShortOnly(JSON.parse(localStorage.getItem('isShortOnly')) || false);
        api.getMoviesCards().then(data => {
            const cache = localStorage.getItem('foundMovies');
            setMovies(cache !== null && localStorage.getItem("searchStr").length ? JSON.parse(cache) : data);
            setCardCounter(getInitCounter(window.innerWidth));
            getMoviesToShow(props.isSearchPerformed, props.isFound, isShortOnly, cache !== null && localStorage.getItem("searchStr").length ? JSON.parse(cache) : data);
        }).finally(() => {setIsLoading(false)});
        api.getSavedMoviesCards().then(resp => {
            setSavedMovies(resp.data);
        });
    }, []);

    useEffect(() => {
        getMoviesToShow(props.isSearchPerformed, props.isFound, isShortOnly)
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
        let initLength = 0;
        let finalLength = 0;
        setCardCounter(getCounter(width));
        if (props.isSearchPerformed && props.isFound) {
            if (isShortOnly) {
                setMoviesToShow(props.foundMovies.filter(movie => movie.duration <= forty_minutes).slice(0, getCounter(width)));
                finalLength = props.foundMovies.filter(movie => movie.duration <= forty_minutes).slice(0, getCounter(width)).length;
                initLength = props.foundMovies.filter(movie => movie.duration <= forty_minutes).length;
            } else {
                setMoviesToShow(props.foundMovies.slice(0, getCounter(width)));
                finalLength = props.foundMovies.slice(0, getCounter(width)).length;
                initLength = props.foundMovies.length;
            };
        } else {
            if (isShortOnly) {
                setMoviesToShow(movies.filter(movie => movie.duration <= forty_minutes).slice(0, getCounter(width)));
                finalLength = movies.filter(movie => movie.duration <= forty_minutes).slice(0, getCounter(width)).length;
                initLength = movies.filter(movie => movie.duration <= forty_minutes).length;
            } else {
                setMoviesToShow(movies.slice(0, getCounter(width)));
                finalLength = movies.slice(0, getCounter(width)).length;
                initLength = movies.length;
            };            
        };
        setHasMore(finalLength < initLength)
    };

    const getInitCounter = (width) => {
        if (width >= one_thousand_two_hundred_and_eighty_minutes) {
            return 12;
        } else if (width >= four_hundred_and_eighty_minutes && width < one_thousand_two_hundred_and_eighty_minutes) {
            return 8;
        } else if (width < four_hundred_and_eighty_minutes) {
            return 5;
        };
    };

    const getCounter = (width) => {
        if (width >= one_thousand_two_hundred_and_eighty_minutes) {
            return cardCounter+3;
        } else if (width < one_thousand_two_hundred_and_eighty_minutes) {
            return cardCounter+2;
        };
    };

    const getMoviesToShow = (isSearchPerformed, isFound, isShortOnly, newMovies) => {
        let arr = [];
        let initLength = 0;
        if (isSearchPerformed && isFound) {
            if (isShortOnly) {
                arr = props.foundMovies.filter(movie => movie.duration <= forty_minutes).slice(0, getInitCounter(window.innerWidth));
                initLength = props.foundMovies.filter(movie => movie.duration <= forty_minutes).length;
            } else {
                arr = props.foundMovies.slice(0, getInitCounter(window.innerWidth));
                initLength = props.foundMovies.length;
            };
        } else if (newMovies) {
            if (isShortOnly) { 
                arr = newMovies.filter(movie => movie.duration <= forty_minutes).slice(0, getInitCounter(window.innerWidth));
                initLength = newMovies.filter(movie => movie.duration <=forty_minutes).length;
            } else {
                arr = newMovies.slice(0, getInitCounter(window.innerWidth));
                initLength = newMovies.length;
            };
        } else {
            if (isShortOnly) { 
                arr = movies.filter(movie => movie.duration <= forty_minutes).slice(0, getInitCounter(window.innerWidth));
                initLength = movies.filter(movie => movie.duration <= forty_minutes).length;
            } else {
                arr = movies.slice(0, getInitCounter(window.innerWidth));
                initLength = movies.length;
            };
        };
    
        setHasMore(arr.length < initLength);
        setCardCounter(getInitCounter(window.innerWidth));
        setMoviesToShow(arr);
    }

    const onShortToggled = (isShort) => {
        getMoviesToShow(props.isSearchPerformed, props.isFound, !isShort);
        setIsShortOnly(!isShort);
        localStorage.setItem('isShortOnly', !isShort);
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
        <FilterCheckbox isShortOnly={isShortOnly} onShortToggled={onShortToggled}/>
        <Preloader isLoading={isLoading}/>
        <MoviesCardList
            movies={moviesToShow}
            isSearchPerformed={props.isSearchPerformed}
            isFound={props.isFound}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            deleteSavedMovie={deleteSavedMovie}
            loadMore={loadMore}
            hasMore={hasMore}
        />
        </div>
    )
}
export default Movies;