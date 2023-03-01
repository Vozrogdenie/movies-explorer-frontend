import avatar from '../../images/avatar.jpeg'

function AboutMe() {
    return (
        <div className="aboutMe" id="student">
            <p className="aboutMe__text">Студент</p>
            <div className="aboutMe__me">
                <div className="about__name">
                    <h3 className="about__namefull">Евгения</h3>
                    <p className="about__proffessional">Фронтенд-разработчик, 24 года</p>
                    <p className="about__hobby">Люблю котят и лошадей</p>
                    <a className="about__github" href="https://github.com/Vozrogdenie">Github</a>
                </div>
                <img src={avatar} className="about__avatar" alt="Фотография" />
            </div>
        </div>
    )
}
export default AboutMe;