import { useState } from "react";
import Header from "../Header/Header";
function Profile({hello, name, email}) {
    const [isDisabled, setIsDisabled] = useState(true);

    const change = () => {
        setIsDisabled(!isDisabled)
    }
    return (
        <>
            <Header
                link={'Фильмы'}
                linkTwo={'Сохранненые фильмы'}
                accaunt={'Аккаунт'}
                loggedIn={true}
            />
            <div className="profile" id="#profile">
                <h3 className="profile__helloName">{`Привет ${hello}!`}</h3>
                <form className="profile__form">
                    <div className="profile__input" >
                        <label className="profile__label" >Имя</label>
                        <input className="profile__name" placeholder="Имя" disabled={isDisabled}   defaultValue={name}></input>
                    </div>
                    <div className="profile__input" >
                        <label className="profile__label" >E-mail</label>
                        <input className="profile__email" placeholder="Email" disabled={isDisabled}  defaultValue={email}></input>
                    </div>
                </form>
                <button className="profile__edit" onClick={() => change()}  type="button">Редактировать</button>
                <button className="profile__exit" type="button"><a href="/singin" className="profile__exit"> Выйти из аккаунта</a></button>

            </div>
        </>
    )
}

export default Profile; 