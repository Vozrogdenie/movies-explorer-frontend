function AboutProject() {
    return (
        <div className="aboutProject__about">
            <h2 className="aboutProject__text">О проекте</h2>
            <div className="aboutProject__paragrah">
                <div className="aboutProject__paragrahOne">
                    <h3 className="aboutProject__h">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__p">Составление плана, работу над бэкендом, вёрстку, добавление<br />функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__paragrahTwo">
                    <h3 className="aboutProject__h">На выполнение диплома ушло 5 недель</h3>
                    <div className="aboutProject__p">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было<br />соблюдать, чтобы успешно защититься.</div>
                </div>
            </div>
            <div className="aboutProject__week">
                <div className="aboutProject__one">
                    <h3 className="aboutProject__oneText">1 неделя</h3>
                    <div className="aboutProject__back">Back-end</div>
                </div>
                <div className="aboutProject__four">
                    <h3 className="aboutProject__fourText">4 недели</h3>
                    <div className="aboutProject__front">Front-end</div></div>
            </div>
        </div>
    )
}

export default AboutProject;