import banner from '../../../images/земля.png'

function Promo() {
    return(
        <section className='promo'>
            <div className='promo__text'>
               <h1 className='promo__title'>Учебный проект студента <br />факультета Веб-<br />разработки</h1>
               <p className='promo__paragrah'>Листайте ниже, чтобы узнать больше про этот <br /> проект и его создателя.</p>
               <a href='#student'><button className='promo__learn'>Узнать больше</button></a>
            </div>
           <img className='promo__img' src={banner} alt='Земля'></img>
        </section>
    )
}

export default Promo;