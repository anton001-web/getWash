import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../redux/actions";
import {Modal} from "./Modal";

const Footer = () => {
    const dispatch = useDispatch()
    const footerModal = React.createRef()

    const {visibility} = useSelector(store => {
        const {modal} = store
        return modal
    })

    useEffect(() => {
        if(visibility) {
            footerModal.current.classList.add('active')
        } else {
            footerModal.current.classList.remove('active')
        }
    }, [visibility])

    const modalHandle = () => {
        dispatch(toggleModal())
    }

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <Modal ref={footerModal} toggle={modalHandle} />
                    <h1 className='footer-logo'>GetWash</h1>
                    <ul className='footer-list'>
                        <li className='list-item' data-mar><a className='footer-link' href="">Как использовать</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Партнерам</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Скачать</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Отзывы</a></li>
                    </ul>
                    <button className='footer-btn' onClick={modalHandle}>
                        Получить доступ
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;