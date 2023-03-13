import { useState } from 'react';
import headLogo from '../../images/logo.png';
import api from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const history = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const onLogin = (e) => {
    //     e.preventDefault();
    //     api.authorization(email, password).then(data => {
    //         if (data.token) {
    //             history('/movies');
    //             localStorage.setItem('jwt', data.token);
    //         } else {
    //             history('/signin');
    //         }
    //     });
    // };

    return(
        <div className="login register">
            <a href="/" className='login register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="login register__welcom">Рады видеть!</h3>
            <form  className="login register__form">
                <label  className="login register__label">E-mail</label>
                <input onChange={onEmailChange} required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" placeholder="Email" className="login register__input"></input>
                <span className="login register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                <label className="login register__label">Пароль</label>
                <input onChange={onPasswordChange} required  type="password" name="password" minLength="4" placeholder="Пароль" maxLength="20"className="login register__input"></input>
                <span className="login register__error">Поле должно быть заполнено. Минимум 4 символа и максимум 20.</span>
            </form>
            <button onClick={e => props.onLogin(e, email, password)} className="login register__register">Войти</button>
            <p className="login register__title">Еще не зарегистрированы?&nbsp; <a href="/signup"> Регистрация</a></p>
        </div>
    )
}
export default Login;