import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__practicum">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__footer">
                <p>&copy; 2023</p>
                <div className="footer__avtor">
                    <Link to="https://practicum.yandex.ru" target="_blank">Яндекс практикум</Link>
                    <Link to="https://github.com/Vozrogdenie" target="_blank">Github</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;