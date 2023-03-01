import { Link } from "react-router-dom";

function PageNotFound() {
    return(
        <div className="pageNotFound">
            <h4 className="pageNotFound__err">404</h4>
            <p className="pageNotFound__title">Страница не найдена</p>
            <a href="/movies" className="pageNotFound__back">Назад</a>
        </div>
    )
}

export default PageNotFound;