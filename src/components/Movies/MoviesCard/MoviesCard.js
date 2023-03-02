import trach from '../../../images/trach.png'
import heart from '../../../images/like.png'
import video from '../../../images/video.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
function MoviesCard(props) {
    const [save, setSave] = useState(false);
    const [saveMovies, setSaveMovies] = useState([]);
    const location = useLocation();
    const addSaveMovies = (product) => {
        setSaveMovies(prev => [...prev, product])
        console.log(setSaveMovies)
    }


    const likeMovies = () => {
        setSave(({ save }) => {
            return { save }
        })
    }

    return (

        <>
            { window.location.pathname === '/saved-movies' ?
                <div className="moviesCard">
                    <button className="moviesCard__trachMovies" type="button" aria-label="Удалить фильм" >
                        <img className="moviesCard__trach" src={trach} alt="Удалить" />
                    </button>
                    <img className="moviesCard__video" src={video} alt='картинка видео' />
                    <div className="moviesCard__description">
                        <p className="moviesCard__title">Бег это жизнь</p>
                        <div className="moviesCard__time">1ч 17м</div>
                    </div>
                </div>
            :      
            <div className="moviesCard">
                    {save ?
                        <button className="moviesCard__likeMovies" type="button" aria-label="Сохранить фильм">
                            <img className='moviesCard__like' src={heart} alt="кнопка сердешки" />
                        </button>
                        : <button className='moviesCard_save' onClick={likeMovies} type='button'>Сохранить</button>
                    }
                    <img className="moviesCard__video" src={video} alt='картинка видео' />
                    <div className="moviesCard__description">
                        <p className="moviesCard__title">Бег это жизнь</p>
                        <div className="moviesCard__time">1ч 17м</div>
                    </div>
                </div>
            }

        </>

    )
}
export default MoviesCard;