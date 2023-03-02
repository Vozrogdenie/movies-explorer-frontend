import icon from '../../../images/icon.png'

function SearchForm() {
    return (
        <section className="searchForm">
          <div href="/" className='seachForm__circle'><img src={icon} className='seachForm__loupe' alt="Логотип"/></div>  
          <input className='seachForm__input' placeholder='Фильм'></input>
          <button  className='searchForm__search'>Найти</button>
        </section>
    )
}
export default SearchForm;