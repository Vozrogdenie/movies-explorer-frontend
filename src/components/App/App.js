import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import authApi from '../../utils/auth';
import api from '../../utils/MainApi';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { useSearchParams } from 'react-router-dom';

function App() {
    const history = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [loggedIn, setloggedIn] = useState(false);
    const [saveMovies, setSaveMovies] = useState([])

    function addLike(id, isLiked) {
        api.changeLikeCardStatus().then(() => {
          setSaveMovies(prev => [...prev, isLiked])
        }).catch((err) => {
          console.log(err)
        });;
      };

    // const [checkbox, setCheckbox] = useState(false);
    // const [cards, setCards] = useState([])
    // function checkSmallMovies() {
    //     if (checkbox = true && cards.duration <= 40){
    //         return cards.duration<=40;
    //     }else{ return cards}
    // }
    // const [ searchParams, setSearchParams] = useSearchParams();
    // const [query, setQuery] = useState('')
    // //   const cardQuery = searchParams.get('card') || '';

    // const cardQuery = searchParams.get('card') || '';

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target.value;
    //     const query = form.search.value;
    //     setSearchParams({card: query})
    // }
    // const [value, setValue] = useState('');
    // const filtered = movies.filter(movie => {
    //     return movie.nameRU.toLowerCase().includes(value.toLowerCase)
    // })
    useEffect(() => {
        authApi.checkToken(api._getToken())
            .then(res => { 
                setloggedIn(true);
                setName(res.name);
                setEmail(res.email);
            })
            .catch(err => {
                setloggedIn(false);
            });
    }, []);

    const onLogin = (e, email, password) => {
        e.preventDefault();
        authApi.authorization(email, password).then(data => {
            if (data.token) {
                history('/movies');
                localStorage.setItem('jwt', data.token);
                setloggedIn(true);
            } else {
                history('/signin');
            }
        });
    };

    return (
        <UserContext.Provider value={{name: name, email: email}}>
            <Routes>
                <Route path='/'  element={<Main loggedIn={loggedIn}/>}/>
                <Route path='/movies' element={<Movies loggedIn={loggedIn} addLike={addLike}/>}/>
                <Route path='/profile' UserName={name} UserEmail={email} element={<Profile loggedIn={loggedIn}/>}/>
                <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} />}/>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/signin' element={<Login onLogin={onLogin}/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </UserContext.Provider>
    )
}

export default App;