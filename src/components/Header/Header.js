import headLogo from '../../images/logo.png'
import humenAccaunt from '../../images/humenAccaunt.png'
import close from '../../images/Group.png';

import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {
    const location = useLocation();
    const [burger, setBurger] = useState(false)
    const [style, setStyle]= useState('')
    const activeStyle = () => {
       style={ borderBottom:'1px solid'}
    }
    
   

    function openBurger() {
        if (burger) {
            setBurger(false);
        } else {
            setBurger(true);
        }
    }

    function closeBurger(evt) {
        if (evt.target.classList.contains('abc')) {
            evt.preventDefault();
            setBurger(false);
        }
    }

    return (
        <>
            {props.loggedIn ?
                <header className="header__registered" >
                    <a href="/" className='header__logo'><img src={headLogo} alt="Логотип" /></a>
                    <div className={burger ? 'active' : 'header__burger'} onClick={openBurger}>
                        <span></span>
                    </div>
                    {burger ?
                        <div className='header__open'>
                            <div className='header__block'>
                                <Link to="/" type='button' className="header__main" onClick={props.onLogout}> Главная</Link>
                                <Link to="/movies" type='button' className="header__linkRegistered" onClick={props.onLogout}> {props.link}</Link>
                                <Link to="/saved-movies" className="header__linkTwoRegistered" onClick={props.onLogout}> {props.linkTwo}</Link>
                            </div>
                            <div className='header__registeredAccaunt' to="/profile">
                                <Link to="/profile" rel="stylesheet" type='button' className="header__accaunt" onClick={props.onLogout}> {props.accaunt}</Link>
                                <Link to="/profile" rel="stylesheet" className='heaader__accaunt'><img src={humenAccaunt} className="header__humen" alt="Картинка перехода на аккаунт" /></Link>
                            </div>
                        </div>
                        : <div className='header__close'>
                            <div className='header__block'>

                                <Link to="/movies" type='button' className="header__linkRegistered"  onClick={props.onLogout}> {props.link}</Link>
                                <Link to="/saved-movies" className="header__linkTwoRegistered" onClick={props.onLogout}> {props.linkTwo}</Link>
                            </div>
                            <div className='header__registeredAccaunt'>
                                <Link to="/profile" type='button' className="header__accaunt" onClick={props.onLogout}> {props.accaunt}</Link>
                                <Link to="/profile" className='heaader__accaunt'><img src={humenAccaunt} className="header__humen" alt="Картинка перехода на аккаунт" /></Link>
                            </div>
                        </div>
                    }
                </header>
                :
                <header className="header">
                    <Link to="/"  className='header__logo'><img src={headLogo} alt="Логотип" /></Link>
                    <div className='header__record'> 
                        <p  type='button' className="header__link" > <Link to="/signup"> {props.link}</Link></p>
                        <button className='header__button' type='button'><Link to="/signin" className="header__linkTwo"> {props.linkTwo}</Link></button>
                    </div>
                </header>
            }
        </>
    )

}

export default Header;