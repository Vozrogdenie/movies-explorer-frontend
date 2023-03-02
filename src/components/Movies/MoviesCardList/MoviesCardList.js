import MoviesCard from "../MoviesCard/MoviesCard";
import { CurrentMoviesContext } from "../../CurrentMoviesContext/CurrentMoviesContext";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import React from "react";


function MoviesCardList() {
    const movies = React.useContext(CurrentMoviesContext)
    
    return (
        <section>
            <div className="moviesCardList">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                </div>
            <div className="moviesCardList__movies">
                <button className="moviesCardList__more">Ещё</button>
            </div>
            <Footer />
        </section>
    )
}
export default MoviesCardList;