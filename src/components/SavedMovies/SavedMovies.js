import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';
import Footer from '../Footer/Footer'
import api from '../../utils/MainApi';

function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = useState([]);

    useEffect(() => {
        api.getSavedMoviesCards().then(resp => {
            setSavedMovies(resp.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const deleteSavedMovie = (movie_id) => {
        api.removeMovieFromSaved(movie_id).then(() => {
            api.getSavedMoviesCards().then(resp => {
                setSavedMovies(resp.data);
            });
        }).catch(err => {
            console.log(err);
        });
    };

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
            <FilterCheckbox />
            <div className="SavedMovies moviesCardList">
                { savedMovies.length ? 
                    !props.isFound && !props.isSearchPerformed ? savedMovies.map(movie => {
                        return <MoviesCard key={movie.movieId} deleteSavedMovie={deleteSavedMovie} card={movie}/>
                    })
                    : props.isFound && props.isSearchPerformed ? props.foundMovies.map(movie => {
                        return <MoviesCard key={movie.movieId} deleteSavedMovie={deleteSavedMovie} card={movie}/>
                    })
                    : <p className='savedMovies__title'>Ничего не найдено</p>
                : <p className='savedMovies__title'>Нет сохранённых фильмов</p>}
            </div>
            <Footer/>
        </>
    )
}
export default SavedMovies;