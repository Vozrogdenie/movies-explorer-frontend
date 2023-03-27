import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedMovies from '../SavedMovies/SavedMovies';
import api from '../../utils/API';
import { useState } from 'react';
import React from 'react';
import { CurrentMoviesContext } from '../CurrentMoviesContext/CurrentMoviesContext'
function App() {
    const [loggedIn, setloggedIn] = useState(false)

    const [moviesSave, setMoviesSave] = useState([])
    const [movies, setMovies] = useState([])

    return (
     
        <Routes>
            <Route path='/'  element={<Main loggedIn={false}/>}/>
            <Route path='/movies' element={<Movies loggedIn={true}/>}/>
            <Route path='/profile' element={<Profile hello={'Evgeniya'}  loggedIn={true} name={'Evgeniya'} email={'dracon@mail.ru'}/>}/>
            <Route path='/saved-movies' element={<SavedMovies loggedIn={true} />}/>
            <Route path='/singup' element={<Register/>}/>
            <Route path='/singin' element={<Login/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
        
    )
}

export default App;