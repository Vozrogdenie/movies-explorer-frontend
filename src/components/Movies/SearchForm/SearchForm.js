import icon from '../../../images/icon.png'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import api from '../../../utils/API';
import { useEffect } from 'react';

function SearchForm() {
  const [value, setValue] = useState('');

    return (
        <section className="searchForm">
          <div href="/" className='seachForm__circle'><img src={icon} className='seachForm__loupe' alt="Логотип"/></div>  
         <form> <input className='seachForm__input' onChange={(e)=>setValue(e.target.value)} name='search' placeholder='Фильм'></input></form>
          <button   className='searchForm__search'>Найти</button>
        </section>
    )
}
export default SearchForm;