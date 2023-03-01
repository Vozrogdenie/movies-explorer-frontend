import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCard from '../Movies/MoviesCard/MoviesCard';

function SavedMovies(props) {
    return (
        <>
            <Header
                loggedIn={true}
                link={'Фильмы'}
                linkTwo={'Сохранненые фильмы'}
                path='/saved-movies'
            />
            
            <SearchForm />
            <FilterCheckbox />
            <div className="SavedMovies moviesCardList">
                
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            </div>

        </>
    )
}
export default SavedMovies;