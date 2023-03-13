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
                                <a href="/" type='button' className="header__main" onClick={props.onLogout}> Главная</a>
                                <a href="/movies" type='button' className="header__linkRegistered" onClick={props.onLogout}> {props.link}</a>
                                <a href="/saved-movies" className="header__linkTwoRegistered" onClick={props.onLogout}> {props.linkTwo}</a>
                            </div>
                            <div className='header__registeredAccaunt' to="/profile">
                                <a href="/profile" rel="stylesheet" type='button' className="header__accaunt" onClick={props.onLogout}> {props.accaunt}</a>
                                <a href="/profile" rel="stylesheet" className='heaader__accaunt'><img src={humenAccaunt} className="header__humen" alt="Картинка перехода на аккаунт" /></a>
                            </div>
                        </div>
                        : <div className='header__close'>
                            <div className='header__block'>

                                <a href="/movies" type='button' className="header__linkRegistered"  onClick={props.onLogout}> {props.link}</a>
                                <a href="/saved-movies" className="header__linkTwoRegistered" onClick={props.onLogout}> {props.linkTwo}</a>
                            </div>
                            <div className='header__registeredAccaunt'>
                                <a href="/profile" type='button' className="header__accaunt" onClick={props.onLogout}> {props.accaunt}</a>
                                <a href="/profile" className='heaader__accaunt'><img src={humenAccaunt} className="header__humen" alt="Картинка перехода на аккаунт" /></a>
                            </div>
                        </div>
                    }
                </header>
                :
                <header className="header">
                    <a href="/"  className='header__logo'><img src={headLogo} alt="Логотип" /></a>
                    <div className='header__record'> 
                        <p  type='button' className="header__link" > <a href="/signup"> {props.link}</a></p>
                        <button className='header__button' type='button'><a href="/signin" className="header__linkTwo"> {props.linkTwo}</a></button>
                    </div>
                </header>
            }
        </>
    )

}

export default Header;