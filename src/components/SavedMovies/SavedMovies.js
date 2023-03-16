import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer'
import api from '../../utils/MainApi';

function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = useState([]);
    const [cardCounter, setCardCounter] = useState(0);
    const [moviesToShow, setMoviesToShow] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [isShortOnly, setIsShortOnly] = useState(false);

    useEffect(() => {
        api.getSavedMoviesCards().then(resp => {
            setSavedMovies(resp.data);
            setCardCounter(getInitCounter(window.innerWidth));
            getMoviesToShow(props.isSearchPerformed, props.isFound, isShortOnly, resp.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        getMoviesToShow(props.isSearchPerformed, props.isFound, isShortOnly)
    }, [props.foundMovies]);

    const deleteSavedMovie = (movie_id) => {
        api.removeMovieFromSaved(movie_id).then(() => {
            api.getSavedMoviesCards().then(resp => {
                setSavedMovies(resp.data);
            });
        }).catch(err => {
            console.log(err);
        });
    };

    const getMoviesToShow = (isSearchPerformed, isFound, isShortOnly, newMovies) => {
        let arr = [];
        let initLength = 0;
        if (isSearchPerformed && isFound) {
            if (isShortOnly) {
                arr = props.foundMovies.filter(movie => movie.duration <= 40).slice(0, getInitCounter(window.innerWidth));
                initLength = props.foundMovies.filter(movie => movie.duration <= 40).length;
            } else {
                arr = props.foundMovies.slice(0, getInitCounter(window.innerWidth));
                initLength = props.foundMovies.length;
            };
        } else if (newMovies) {
            if (isShortOnly) { 
                arr = newMovies.filter(movie => movie.duration <= 40).slice(0, getInitCounter(window.innerWidth));
                initLength = newMovies.filter(movie => movie.duration <= 40).length;
            } else {
                arr = newMovies.slice(0, getInitCounter(window.innerWidth));
                initLength = newMovies.length;
            };
        } else {
            if (isShortOnly) { 
                arr = savedMovies.filter(movie => movie.duration <= 40).slice(0, getInitCounter(window.innerWidth));
                initLength = savedMovies.filter(movie => movie.duration <= 40).length;
            } else {
                arr = savedMovies.slice(0, getInitCounter(window.innerWidth));
                initLength = savedMovies.length;
            };
        };
    
        setHasMore(arr.length < initLength);
        setCardCounter(getInitCounter(window.innerWidth));
        setMoviesToShow(arr);
    }

    const loadMore = () => {
        const width = window.innerWidth;
        let initLength = 0;
        let finalLength = 0;
        setCardCounter(getCounter(width));
        if (props.isSearchPerformed && props.isFound) {
            if (isShortOnly) {
                setMoviesToShow(props.foundMovies.filter(movie => movie.duration <= 40).slice(0, getCounter(width)));
                finalLength = props.foundMovies.filter(movie => movie.duration <= 40).slice(0, getCounter(width)).length;
                initLength = props.foundMovies.filter(movie => movie.duration <= 40).length;
            } else {
                setMoviesToShow(props.foundMovies.slice(0, getCounter(width)));
                finalLength = props.foundMovies.slice(0, getCounter(width)).length;
                initLength = props.foundMovies.length;
            };
        } else {
            if (isShortOnly) {
                setMoviesToShow(savedMovies.filter(movie => movie.duration <= 40).slice(0, getCounter(width)));
                finalLength = savedMovies.filter(movie => movie.duration <= 40).slice(0, getCounter(width)).length;
                initLength = savedMovies.filter(movie => movie.duration <= 40).length;
            } else {
                setMoviesToShow(savedMovies.slice(0, getCounter(width)));
                finalLength = savedMovies.slice(0, getCounter(width)).length;
                initLength = savedMovies.length;
            };            
        };
        setHasMore(finalLength < initLength)
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

    const onShortToggled = (isShort) => {
        getMoviesToShow(props.isSearchPerformed, props.isFound, !isShort);
        setIsShortOnly(!isShort)
    }

    return (
        <>
            <Header
                loggedIn={true}
                link={'Фильмы'}
                linkTwo={'Сохранненые фильмы'}
                accaunt={'Аккаунт'}
                path='/saved-movies'
            />
            <SearchForm submitSearch={props.submitSearch} movies={savedMovies}/>
            <FilterCheckbox isShortOnly={isShortOnly} onShortToggled={onShortToggled}/>
            <div className="SavedMovies moviesCardList">
                { savedMovies.length ? 
                    moviesToShow.length ? moviesToShow.map(movie => {
                        return <MoviesCard key={movie.movieId} deleteSavedMovie={deleteSavedMovie} card={movie}/>
                    })
                    : 
                    <p className='savedMovies__title'>Ничего не найдено</p>
                : <p className='savedMovies__title'>Нет сохранённых фильмов</p>}
                {hasMore ? <div className="moviesCardList__movies">
                    <button  onClick={loadMore} className="moviesCardList__more">Ещё</button>
                </div> :[]}
            </div>
            <Footer/>
        </>
    )
}
export default SavedMovies;