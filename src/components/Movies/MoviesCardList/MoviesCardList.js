import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../../Footer/Footer";
import React from "react";

function MoviesCardList(props) {

    return (
        <section>
            
            <div className="moviesCardList">
                { !props.isFound && !props.isSearchPerformed ? props.movies.map((movie) => {
                        return <MoviesCard
                            isSaved={props.savedMovies.find(m => m.movieId === movie.id) !== undefined } 
                            card={movie} 
                            key={movie.id}
                            saveMovie={props.saveMovie}
                            deleteSavedMovie={props.deleteSavedMovie}
                        />
                    }) 
                : props.isFound && props.isSearchPerformed ?
                    props.movies.map((movie) => {
                        return <MoviesCard
                            isSaved={props.savedMovies.find(m => m.movieId === movie.id) !== undefined } 
                            card={movie} 
                            key={movie.id}
                            saveMovie={props.saveMovie}
                            deleteSavedMovie={props.deleteSavedMovie}
                        />
                    }) 
                : <p className="savedMovies__title" >Ничего не найдено</p>
                }
            </div>
            {props.hasMore ? <div className="moviesCardList__movies">
                <button  onClick={props.loadMore} className="moviesCardList__more">Ещё</button>
            </div> :[]}
            <Footer />
        </section>
    )
}
export default MoviesCardList;