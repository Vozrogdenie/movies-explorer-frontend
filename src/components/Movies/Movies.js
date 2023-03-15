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
        
        <SearchForm handleSubmit={props.handleSubmit}/>
        <FilterCheckbox/>
        <MoviesCardList addLike={props.addLike}/>
        {/* <Preloader/> */}
        </div>
    )
}
export default Movies;