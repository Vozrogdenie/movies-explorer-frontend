import arrow from "../../../images/arrow.png"
function Portfolio() {
    return (
        <section className="portfolio">
            <p className="portfolio__portfolio">Portfolio</p>
            <div className="portfolio__link">
                <a className="portfolio__sayt" target="_blank" href="https://github.com/Vozrogdenie/russian-travel">Статичный сайт</a>
                <a href="https://github.com/Vozrogdenie/russian-travel" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></a>
            </div>
            <div className="portfolio__link">
                <a className="portfolio__sayt" target="_blank" href="https://github.com/Vozrogdenie/react-mesto-api-full">Адаптивный сайт</a>
                <a href="https://github.com/Vozrogdenie/react-mesto-api-full" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></a>
            </div>
            <div className="portfolio__link">
                <a className="portfolio__sayt" target="_blank" href="https://github.com/Vozrogdenie/movies-explorer-frontend">Одностраничное приложение</a>
                <a href="https://github.com/Vozrogdenie/movies-explorer-frontend" target="_blank"><img className="portfolio__arrow" src={arrow} alt="Логотип" /></a>
            </div>
        </section>
    )
}

export default Portfolio;