import { Link } from "react-router-dom"

function NavTab() {
    return(
        <section className="navTab">
            <a className="navTab__link" href="#project">О проекте</a>
            <a className="navTab__link" href="#techs">Технологии</a>
            <a className="navTab__link" href="#student">Студент</a>
        </section>
    )
}

export default NavTab;