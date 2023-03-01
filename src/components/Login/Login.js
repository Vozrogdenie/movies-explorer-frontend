import headLogo from '../../images/logo.png'
function Login(props) {
    return(
        <div className="login register">
            <a href="/" className='login register__logo'><img src={headLogo} alt="Логотип"/></a>
            <h3 className="login register__welcom">Рады видеть!</h3>
            <form  className="login register__form">
                <label className="login register__label">E-mail</label>
                <input className="login register__input"></input>
                <label className="login register__label">Пароль</label>
                <input className="login register__input"></input>
            </form>
            <button className="login register__register">Войти</button>
            <p className="login register__title">Еще не зарегистрированы?&nbsp; <a href="/singup"> Регистрация</a></p>
        </div>
    )
}
export default Login;