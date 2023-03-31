import headLogo from '../../images/logo.png'
import React from 'react';
import useFormWithValidation from '../hooks/useFormWithValidation';
import { Link } from 'react-router-dom';
function Register(props) {

    const {
        values, 
        errors, 
        isValid, 
        handleChange,
    } = useFormWithValidation();
    
    const { name, email, password } = values;

    const onSubmit = (e, name, email, password, isValid) => {
        if (!props.loading) props.onRegister(e, name, email, password, isValid);
    };

    return(
        <div className="register" id='register'>
            {props.children}
            <Link to="/" className='register__logo'><img src={headLogo} alt="Логотип"/></Link>
            <h3 className="register__welcom">Добро пожаловать!</h3>
            <form className="register__form">
                <label id="name" name="name" className="register__label" >Имя</label>
                <input onChange={handleChange} required type='text' name="name" minLength="2" className="register__input" placeholder="Имя"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 2 буквы</span>
                <label className="register__label">E-mail</label>
                <input onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email || ''} required   id="email" name="email" type="text" placeholder="Email" className="register__input"></input>
                <span className="register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                <label id="password" className="register__label">Пароль</label>
                <input onChange={handleChange} value={password} required className="register__input" type="password" name="password"  minLength="4" placeholder="Пароль" maxLength="20" ></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 4 символа и максимум 20.</span>
            </form>
            <button onClick={e => onSubmit(e, name, email, password, isValid)} disabled={!isValid} className="register__register">Зарегистрироваться</button>
            <p className="register__title">Уже зарегистрированы?&nbsp; <Link to="/signin"> Войти</Link></p>
        </div>
    )
}
export default Register;