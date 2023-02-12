import headLogo from '../../images/logo.png'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
    <header className="header">
        <a href="/"><img src={headLogo} alt="Логотип"/></a>
        <div className='header__block'>
            <Link to={props.path} type='button' className="header__link" onClick={props.onLogout}> {props.link}</Link>
            <button className='header__button' type='button'><Link to={props.path} className="header__linkTwo" onClick={props.onLogout}> {props.linkTwo}</Link></button>
        </div>
    </header>
    )
}

export default Header;