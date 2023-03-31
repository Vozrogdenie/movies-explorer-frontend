import { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

function Profile(props) {
    const history = useNavigate();
    const context = useContext(UserContext);

    const [saveError, setSaveError] = useState();
    const [errors, setErrors] = useState({name: '', email: ''});
    const [isValid, setIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [newUser, setNewUser] = useState({name: useContext(UserContext).name, email: useContext(UserContext).email});

    useEffect(() => {
        setNewUser(context);
    }, [context])

    const onLogoff = (e) => {
        e.preventDefault();
        localStorage.removeItem('jwt');
        history('/signin');
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewUser(user => ({
            ...user,
            [name]: value
        }));
        setErrors((errors) => ({
            ...errors,
            [name]: e.target.validationMessage
        }));
        setIsValid(e.target.closest('form').checkValidity());
    };

    useEffect(() => {
        setSubmitDisabled(context.name === newUser.name && context.email === newUser.email)
    }, [newUser.name, newUser.email, context.name, context.email]);

    
    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        props.onProfileChange(newUser.name, newUser.email, isValid, setSaveError)
    }
    
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
                {formSubmitted ? <span className={!Object.keys(errors).length || !saveError ? "register__ok" : "refister__err"}>{!Object.keys(errors).length || !saveError ? "Данные успешно обновлены." : "Произошла ошибка. Попробуйте позже."}</span>:[]}
                <button onClick={(e) => onSubmit(e)} disabled={!isValid || submitDisabled} className="profile__edit" type="button">Редактировать</button>
                <button onClick={onLogoff} className="profile__exit" type="button"><Link to="/signin" className="profile__exit"> Выйти из аккаунта</Link></button>
            </section>
        </>
    )
}

export default Profile;