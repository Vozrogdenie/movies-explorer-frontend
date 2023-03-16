import { useState, useContext } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import api from "../../utils/MainApi";
function Profile({ loggedIn, updateProfile }) {
    const history = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    
    const onLogoff = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        history('/signin');
    };
    const change = () => {
        setIsDisabled(!isDisabled)
    };
    const context = useContext(UserContext);
    return (
        <>
            <Header
                link={'Фильмы'}
                linkTwo={'Сохранненые фильмы'}
                accaunt={'Аккаунт'}
                loggedIn={loggedIn}
            />
            <section className="profile" id="#profile">
                <h3 className="profile__helloName">{`Привет ${context.name}!`}</h3>
                <form className="profile__form">
                    <div className="profile__input" >
                        <label className="profile__label">Имя</label>
                        <input className="profile__name" placeholder="Имя" disabled={isDisabled}   defaultValue={context.name}></input>
                    </div>
                    <div className="profile__input" >
                        <label className="profile__label" >E-mail</label>
                        <input className="profile__email" placeholder="Email" disabled={isDisabled}  defaultValue={context.email}></input>
                    </div>
                </form>
                <button className="profile__edit" onClick={() => change()} onSubmit={updateProfile}  type="button">Редактировать</button>
                <button onClick={onLogoff} className="profile__exit" type="button"><a href="/signin" className="profile__exit"> Выйти из аккаунта</a></button>

            </section>
        </>
    )
}

export default Profile; 