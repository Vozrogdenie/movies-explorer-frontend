function FilterCheckbox(props) {
    return(
        <section className="filterCheckbox">
            <input type='checkbox' checked={props.isShortOnly} onChange={() => props.onShortToggled(props.isShortOnly)} className="filterCheckbox__films"></input>
            <div className="filterCheckbox__box"></div>
                Короткометражки
        </section>
    )
}
export default FilterCheckbox;