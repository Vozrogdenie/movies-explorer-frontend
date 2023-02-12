import { Link } from "react-router-dom"

function NavTab() {
    return(
        <div className="navTab__bar">
            <Link className="navTab__link">О проекте</Link>
            <Link className="navTab__link">Технологии</Link>
            <Link className="navTab__link">Студент</Link>
        </div>
    )
}

export default NavTab;