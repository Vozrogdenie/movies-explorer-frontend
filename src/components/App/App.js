import { Route, Routes} from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';

function App() {

    return(
        <div>
            {/* <Header 
            link={'Регистрация '}
            linkTwo={'Войти'}/> */}
           {/* <Main/>   */}
           <Header 
            link={'Фильмы '}
            linkTwo={'Сохраненные фильмы'}/>
           <Movies/> 
           <Footer/>
        {/* <Routes> */}
                
                {/* <Route path='/movies'>
                    <Header
                        link={'Фильмы'}
                        path='/movies'
                    />
                </Route>
                <Route path='/saved-movies'>
                    <Header
                        link={'Сохранненые фильмы'}
                        path='/saved-movies'
                    />
                </Route>
                <Route path='/profile'>
                    <Header
                        link={'Аккаунт'}
                        path='/profile'
                    />
                </Route>
                <Route path='/singin'>
                    <Header
                        link={'Авторизация'}
                        path='/singin'
                    />
                </Route>
                <Route path='/singup'>
                  <Header
                        link={'Регистрация'}
                        path='/singup'
                    />
                </Route> */}
                
                {/* </Routes> */}
          
                </div>
        
    )
}

export default App;