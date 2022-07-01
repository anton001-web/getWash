import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../redux/actions";


const Header = () => {
    const dispatch = useDispatch()
    const menuRef = React.createRef()
    const btnBurger = React.createRef()

    const {visible} = useSelector(store => {
        const {burger} = store
        return burger
    })

    useEffect(() => {
        if(visible) {
            menuRef.current.style.left = '0'
            btnBurger.current.classList.add('active')
        } else {
            menuRef.current.style.left = '-120%'
            btnBurger.current.classList.remove('active')
        }
    }, [visible])

    const burgerHandle = () => {
        dispatch(toggleBurger())
    }

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <h1 className='header-logo'>GetWash</h1>
                    <div className='header-list__block' ref={menuRef}>
                        <ul className='header-list'>
                            <div className='burger-header'>
                                <h1 className='header-logo'>GetWash</h1>
                                <button className='burger-toggle' onClick={burgerHandle} ref={btnBurger}>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                    <span className='bar'></span>
                                </button>
                            </div>
                            <li className='header-list__item' data-m>Как использовать</li>
                            <li className='header-list__item' data-m>Партнерам</li>
                            <li className='header-list__item' data-m>Скачать</li>
                            <li className='header-list__item'>Отзывы</li>
                            <button className='btn-filled burger-hidden'>Получить доступ</button>
                            <button className='header-burger__btn  burger-hidden'>Стать партнером</button>
                        </ul>
                    </div>
                    <button className='header-btn'>
                        Получить доступ
                    </button>
                    <button className='burger-toggle' onClick={burgerHandle}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header