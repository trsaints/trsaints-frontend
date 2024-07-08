import {faSearch} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './ProjectFilter.css'

function Root({children, onHandleSubmit}) {
    return (
        <form className='filter' onSubmit={onHandleSubmit}>
            <fieldset className='filter__fieldset'>
                <legend className='filter__legend sr-only'>filtro</legend>
                {children}
            </fieldset>

            <button className='highlight-btn filter__submit' type='submit'>
                buscar
                <FontAwesomeIcon className='suffix-icon' icon={faSearch}/>
            </button>
        </form>
    )
}

function Select({options}) {
    const optionItems = options.map(
        (option) => option && <option key={option}>{option}</option>
    )

    return (
        <div className='filter__select'>
            <label className='filter__label highlight-btn' htmlFor='filter-select'>
                Ordenar por:
            </label>

            <select className='filter__input' name='sort' id='filter-select'>
                <option value='' aria-readonly disabled>
                    Selecione
                </option>

                {optionItems}
            </select>
        </div>
    )
}

function SearchBar() {
    return (
        <div className='filter__search'>
            <label className='filter__label sr-only' htmlFor='filter-search'>
                insira um texto
            </label>

            <input
                className='filter__input'
                name='search'
                type='search'
                placeholder='api'
                id='filter-search'
            />
        </div>
    )
}

export const ProjectFilter = {
    Root,
    Select,
    SearchBar,
}
