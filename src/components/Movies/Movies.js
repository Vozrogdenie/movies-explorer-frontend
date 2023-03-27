import SearchForm from "./SearchForm/SearchForm";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import React from "react";
import Header from "../Header/Header";


function Movies(props) {
   
    return(
        <div id="movies">
        <Header
        link={'Фильмы'}
        linkTwo={'Сохранненые фильмы'}
        accaunt={'Аккаунт'}
        loggedIn={props.loggedIn}
    />
        
        <SearchForm/>
        <FilterCheckbox/>
        <MoviesCardList/>
        {/* <Preloader/> */}
        </div>
    )
}
export default Movies;