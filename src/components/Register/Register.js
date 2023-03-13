import { useState } from 'react';
import headLogo from '../../images/logo.png'
import api from '../../utils/auth';
function Register(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onNameChange = (e) => {
        setName(e.target.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onRegister = (e) => {
        e.preventDefault();
        api.register(name, email, password);
    };

    return(
        <div className="register" id='register'>
            {props.children}
            <a href="/" className='register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="register__welcom">Добро пожаловать!</h3>
            <form  className="register__form">
                <label id="name" name="name" className="register__label" >Имя</label>
                <input onChange={onNameChange} required type='text' minLength="2" className="register__input"  placeholder="Имя"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 2 буквы</span>
                <label className="register__label">E-mail</label>
                <input onChange={onEmailChange} required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" name="email" type="text" placeholder="Email" className="register__input"></input>
                <span className="register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                <label id="password" className="register__label">Пароль</label>
                <input onChange={onPasswordChange} required className="register__input" type="password" name="password" minLength="4" placeholder="Пароль" maxLength="20"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 4 символа и максимум 20.</span>
            </form>
            <button onClick={onRegister} className="register__register">Зарегистрироваться</button>
            <p className="register__title">Уже зарегистрированы?&nbsp; <a href="/signin"> Войти</a></p>
        </div>
    )
}
export default Register;