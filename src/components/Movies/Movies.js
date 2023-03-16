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
    const [isLoading, setIsLoading] = useState(false);
    const [add, setAdd] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.getMoviesCards().then(data => {
            setMovies(data);
        }).finally(() => {setIsLoading(false) });
        api.getSavedMoviesCards().then(resp => {
            setSavedMovies(resp.data);
        });
    }, []);

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
    
    function more() {
        if(window.innerWidth>= 1280){
            const doubled = movies.map((movie) => movie);
            setAdd(true)
        }else{console.log('не та ширина')}
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
            movies={props.foundMovies.length ? props.foundMovies : movies}
            isSearchPerformed={props.isSearchPerformed}
            isFound={props.isFound}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            deleteSavedMovie={deleteSavedMovie}
            more={more}
            add={add}
        />
        </div>
    )
}
export default Movies;