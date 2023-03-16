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

function App() {
    const history = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [loggedIn, setloggedIn] = useState(false);
    const [foundMovies, setFoundMovies] = useState([]);
    const [isSearchPerformed, setIsSearchPerformed] = useState(false);
    const [isFound, setIsFound] = useState(false);

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
    const updateProfile = (res) => {
        api
          .updateProfileInfo(res.name, res.email)
          .then((res) => {
            setName(res.name);
                setEmail(res.email);
          })
          .catch((err) => {
            console.log(err);
          });
      };
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
    // const submitCheck = (moviesArray, value) => {
    //     if (value.length) {
    //         const foundMovies = moviesArray.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()));
    //         setFoundMovies(foundMovies);
    //         setIsSearchPerformed(true);
    //         setIsFound(foundMovies.length > 0 ? true : false);
    //     } else {
    //         setFoundMovies([]);
    //         setIsSearchPerformed(false);
    //         setIsFound(false);
    //     };
    // };
    const submitSearch = (moviesArray, value) => {
        if (value.length) {
            const foundMovies = moviesArray.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()));
            setFoundMovies(foundMovies);
            setIsSearchPerformed(true);
            setIsFound(foundMovies.length > 0 ? true : false);
        } else {
            setFoundMovies([]);
            setIsSearchPerformed(false);
            setIsFound(false);
        };
    };

    return (
        <UserContext.Provider value={{name: name, email: email}}>
            <Routes>
                <Route path='/'  element={<Main />}/>
                <Route path='/movies' element={<Movies loggedIn={loggedIn} foundMovies={foundMovies} submitSearch={submitSearch} isSearchPerformed={isSearchPerformed} isFound={isFound}/>}/>
                <Route path='/profile' UserName={name} UserEmail={email} element={<Profile updateProfile={updateProfile} loggedIn={loggedIn}/>}/>
                <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} foundMovies={foundMovies} submitSearch={submitSearch} isSearchPerformed={isSearchPerformed} isFound={isFound}/>}/>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/signin' element={<Login onLogin={onLogin}/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </UserContext.Provider>
    );
};

export default App;