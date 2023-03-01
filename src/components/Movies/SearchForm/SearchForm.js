import icon from '../../../images/icon.png'

function SearchForm() {
    return (
        <div className="searchForm">
          <div href="/" className='seachForm__circle'><img src={icon} className='seachForm__loupe' alt="Логотип"/></div>  
          <input className='seachForm__input' placeholder='Фильмы'></input>
          <button  className='searchForm__search'>Найти</button>
        </div>
    )
}
export default SearchForm;