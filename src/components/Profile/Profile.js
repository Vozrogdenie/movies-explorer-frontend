import { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import api from "../../utils/MainApi";
import useFormWithValidation from "../hooks/useFormWithValidation";

function Profile(props) {
    const history = useNavigate();
    const context = useContext(UserContext);

    const [hasChanged, setHasChanged] = useState(false);

    const onLogoff = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        history('/signin');
    };

    const {
        values,
        errors,
        isValid,
        handleChange,
    } = useFormWithValidation();
    
    const { email, name } = values;

    return (
        <>
            <Header
                link={'Фильмы'}
                linkTwo={'Сохранненые фильмы'}
                accaunt={'Аккаунт'}
                loggedIn={props.loggedIn}
            />
            <section className="profile" id="#profile">
                <h3 className="profile__helloName">{`Привет ${context.name}!`}</h3>
                <form className="profile__form">
                    <div className="profile__input" >
                        <label className="profile__label">Имя</label>
                        <input onChange={handleChange} className="profile__name" placeholder="Имя" defaultValue={context.name} name="name" minLength="2"></input>
                        <span className="register__error">Поле должно быть заполнено. Минимум 2 буквы</span>
                    </div>
                    <div className="profile__input" >
                        <label className="profile__label" >E-mail</label>
                        <input onChange={handleChange} className="profile__email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required   id="email" name="email" defaultValue={context.email}></input>
                        <span className="register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                    </div>
                </form>
                <button onClick={() => props.onProfileChange(name, email, isValid)} disabled={!isValid && !hasChanged} className="profile__edit" type="button">Редактировать</button>
                <button onClick={onLogoff} className="profile__exit" type="button"><a href="/signin" className="profile__exit"> Выйти из аккаунта</a></button>
            </section>
        </>
    )
}

export default Profile;