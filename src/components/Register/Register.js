import { useEffect, useState } from 'react';
import headLogo from '../../images/logo.png'
import api from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import useFormWithValidation from '../hooks/useFormWithValidation';
function Register(props) {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailDirty, setEmailDirty] = useState(false);
    // const [passwordDirty, setPasswordDirty] = useState(false);
    // const [emailError, setEmailError] = useState('Поле не может быть пустым');
    // const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const history = useNavigate()
    const {
        values, errors, isValid, handleChange,
      } = useFormWithValidation();
    
      const { name, email, password } = values;

      const onRegister = (e) => {
        e.preventDefault();
        if (isValid) {
            api.register(name, email, password);
        history('/movies')
          }else{
            console.log()
          }
       
    };

    return(
        <div className="register" id='register'>
            {props.children}
            <a href="/" className='register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="register__welcom">Добро пожаловать!</h3>
            <form onClick={onRegister} className="register__form">
                <label id="name" name="name" className="register__label" >Имя</label>
                <input  required type='text' minLength="2" className="register__input"  placeholder="Имя"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 2 буквы</span>
                <label className="register__label">E-mail</label>
                <input onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" value={email || ''} required   id="email" name="email" type="text" placeholder="Email" className="register__input"></input>
                <span className="register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                <label id="password" className="register__label">Пароль</label>
                <input  value={password} required className="register__input" type="password" name="password"  minLength="4" placeholder="Пароль" maxLength="20" ></input>
                <span className="register__error">{errors.password}Поле должно быть заполнено. Минимум 4 символа и максимум 20.</span>
            </form>
            <button onClick={onRegister} disabled={!isValid} className="register__register">Зарегистрироваться</button>
            <p className="register__title">Уже зарегистрированы?&nbsp; <a href="/signin"> Войти</a></p>
        </div>
    )
}
export default Register;