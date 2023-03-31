import icon from '../../../images/icon.png'
import { useState } from 'react';

function SearchForm(props) {
  const [value, setValue] = useState(localStorage.getItem('searchStr'));
  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem('searchStr', value);
    props.submitSearch(props.movies, value);
  };

    return (
        <section className="searchForm">
          <div href="/" className='seachForm__circle'><img src={icon} className='seachForm__loupe' alt="Логотип"/></div>  
          <form onSubmit={e => submit(e)}>
            <input className='seachForm__input' value={value} onChange={(e) => setValue(e.target.value)} name='search' placeholder='Фильм'></input>
          </form>
          <button type="submit" onSubmit={e => submit(e)} onClick={(e => submit(e))} className='searchForm__search'>Найти</button>
        </section>
    )
}
export default SearchForm;