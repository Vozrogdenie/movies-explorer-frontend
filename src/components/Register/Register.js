import headLogo from '../../images/logo.png'
function Register(props) {
    return(
        <div className="register" id='register'>
            {props.children}
            <a href="/" className='register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="register__welcom">Добро пожаловать!</h3>
            <form  className="register__form">
                <label id="name" name="name" className="register__label" >Имя</label>
                <input required type='text' minLength="2" className="register__input"  placeholder="Имя"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 2 буквы</span>
                <label className="register__label">E-mail</label>
                <input required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="email" name="email" type="text" placeholder="Email" className="register__input"></input>
                <span className="register__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                <label id="password" className="register__label">Пароль</label>
                <input required className="register__input" type="password" name="password" minLength="4" placeholder="Пароль" maxLength="20"></input>
                <span className="register__error">Поле должно быть заполнено. Минимум 4 символа и максимум 20.</span>
            </form>
            <button className="register__register">Зарегистрироваться</button>
            <p className="register__title">Уже зарегистрированы?&nbsp; <a href="/singin"> Войти</a></p>
        </div>
    )
}
export default Register;