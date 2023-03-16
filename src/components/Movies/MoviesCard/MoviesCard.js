import trach from '../../../images/trach.png';
import heart from '../../../images/like.png';
import { timeParseRU } from '../../../utils/timeParser';

function MoviesCard(props) {

    return (

        <>
            { window.location.pathname === '/saved-movies' ?
                <div className="moviesCard">
                    <button className="moviesCard__trachMovies" onClick={() => props.deleteSavedMovie(props.card.movieId)} type="button" aria-label="Удалить фильм" >
                        <img className="moviesCard__trach" src={trach} alt="Удалить" />
                    </button>
                    <a className="moviesCard__trailer" href={props.card.trailerLink} target="_blank" rel="noreferrer"><img className="moviesCard__video" src={props.card.image} alt='картинка видео' ></img></a>
                    
                    <div className="moviesCard__description">
                        <p className="moviesCard__title">{props.card.nameRU}</p>
                        <div className="moviesCard__time">{timeParseRU(props.card.duration)}</div>
                    </div>
                </div>
            :      
            <div className="moviesCard">
                    {props.isSaved ?
                        <button className="moviesCard__likeMovies" onClick={() => props.deleteSavedMovie(props.card.id)} type="button" aria-label="Сохранить фильм">
                            <img className='moviesCard__like' src={heart} alt="кнопка сердешки" />
                        </button>
                        : <button className='moviesCard_save' onClick={() => props.saveMovie(props.card)} type='button'>Сохранить</button>
                    }
                    <a className="moviesCard__trailer" href={props.card.trailerLink} target="_blank" rel="noreferrer"><img className="moviesCard__video" src={'https://api.nomoreparties.co' + props.card.image.url} alt='картинка видео' /></a>
                    
                    <div className="moviesCard__description">
                        <p className="moviesCard__title">{props.card.nameRU}</p>
                        <div className="moviesCard__time">{timeParseRU(props.card.duration)}</div>
                    </div>
                </div>
            }

        </>

    )
}
export default MoviesCard;