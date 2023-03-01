import headLogo from '../../images/logo.png'
function Register(props) {
    return(
        <div className="register" id='register'>
            {props.children}
            <a href="/" className='register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="register__welcom">Добро пожаловать!</h3>
            <form  className="register__form">
                <label id="name" name="name" className="register__label">Имя</label>
                <input id="email" name="email" className="register__input"></input>
                <label className="register__label">E-mail</label>
                <input className="register__input"></input>
                <label id="password" name="password" className="register__label">Пароль</label>
                <input className="register__input"></input>
            </form>
            <button className="register__register">Зарегистрироваться</button>
            <p className="register__title">Уже зарегистрированы?&nbsp; <a href="/singin"> Войти</a></p>
        </div>
    )
}
export default Register;