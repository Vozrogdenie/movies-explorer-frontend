import { Link } from "react-router-dom"

function NavTab() {
    return(
        <div className="navTab__bar">
            <a className="navTab__link" href="#project">О проекте</a>
            <a className="navTab__link" href="#techs">Технологии</a>
            <a className="navTab__link" href="#student">Студент</a>
        </div>
    )
}

export default NavTab;