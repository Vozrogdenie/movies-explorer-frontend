import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../../Footer/Footer";
import React, { useEffect, useState } from "react";
import MoviesApi from '../../../utils/API';


function MoviesCardList() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        MoviesApi.getApiCards().then(data => {
            setMovies(data);
        });
    })
    return (
        <section>
            <div className="moviesCardList">
                {movies.map(movie => {
                    return <MoviesCard card={movie} key={movie.id}/>
                })}
            </div>
            <div className="moviesCardList__movies">
                <button className="moviesCardList__more">Ещё</button>
            </div>
            <Footer />
        </section>
    )
}
export default MoviesCardList;