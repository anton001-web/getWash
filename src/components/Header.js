import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger, toggleModal} from "../redux/actions";
import {Modal} from "./Modal";


const Header = () => {
    const dispatch = useDispatch()
    const menuRef = React.createRef()
    const btnBurger = React.createRef()
    const headerModal = React.createRef()

    const {visible} = useSelector(store => {
        const {burger} = store
        return burger
    })

    const {visibility} = useSelector(store => {
        const {modal} = store
        return modal
    })

    useEffect(() => {
        if(visible) {
            headerModal.current.classList.add('active')
        } else {
            headerModal.current.classList.remove('active')
        }
    }, [visibility])

    const modalToggle = () => {
        dispatch(toggleModal())
    }

    useEffect(() => {
        if(visible) {
            document.body.style.overflow = 'hidden'
            menuRef.current.style.left = '0'
            btnBurger.current.classList.add('active')
        } else {
            document.body.style.overflow = 'scroll'
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
                    <Modal ref={headerModal} toggle={() => modalToggle}/>
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
                            <li className='header-list__item' data-m><a href="#steps" className='list-item__link'>Как использовать</a></li>
                            <li className='header-list__item' data-m><a href="#advantages" className='list-item__link'>Партнерам</a></li>
                            <li className='header-list__item' data-m><a href="#app" className='list-item__link'>Скачать</a></li>
                            <li className='header-list__item'><a href="#review" className='list-item__link'>Отзывы</a></li>
                            <button className='btn-filled burger-hidden'>Получить доступ</button>
                            <button className='header-burger__btn  burger-hidden'>Стать партнером</button>
                        </ul>
                    </div>
                    <button className='header-btn' onClick={modalToggle}>
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