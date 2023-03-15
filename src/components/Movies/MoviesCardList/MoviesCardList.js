import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../../Footer/Footer";
import React, { useEffect, useState } from "react";
import MoviesApi from '../../../utils/API';
import api from "../../../utils/API";
import { useSearchParams } from "react-router-dom";
function MoviesCardList(props) {
    const [cards, setCards] = useState([]);
    const [value, setValue] = useState('');
    
    useEffect(() => {
        MoviesApi.getApiCards().then(data => {
            setCards(data);
        });
    }, []);

    const filtered = cards.filter(card => {
        
        return card.nameRU.toLowerCase().includes(value.toLowerCase)
    })
    return (
        <section>
            <div className="moviesCardList">
                {cards.map(card => {
                    return <MoviesCard addLike={props.addLike}card={card} key={card.id}/>
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