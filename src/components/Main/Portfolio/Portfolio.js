import { Link } from "react-router-dom";
import arrow from "../../../images/arrow.png"
function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__portfolio">Portfolio</p>
            <div className="portfolio__link">
                <Link className="portfolio__sayt" target="_blank" to="https://github.com/Vozrogdenie/russian-travel">Статичный сайт</Link>
                <Link to="https://github.com/Vozrogdenie/russian-travel" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></Link>
            </div>
            <div className="portfolio__link">
                <Link lassName="portfolio__sayt" target="_blank" to="https://github.com/Vozrogdenie/react-mesto-api-full">Адаптивный сайт</Link>
                <Link to="https://github.com/Vozrogdenie/react-mesto-api-full" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></Link>
            </div>
            <div className="portfolio__link">
                <Link lassName="portfolio__sayt" target="_blank" to="https://github.com/Vozrogdenie/movies-explorer-frontend">Одностраничное приложение</Link>
                <Link to="https://github.com/Vozrogdenie/movies-explorer-frontend" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></Link>
            </div>
        </section>
    )
}

export default Portfolio;