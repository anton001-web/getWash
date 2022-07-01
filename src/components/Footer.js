import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <h1 className='footer-logo'>GetWash</h1>
                    <ul className='footer-list'>
                        <li className='list-item' data-mar><a className='footer-link' href="">Как использовать</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Партнерам</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Скачать</a></li>
                        <li className='list-item' data-mar><a className='footer-link' href="">Отзывы</a></li>
                    </ul>
                    <button className='footer-btn'>
                        Получить доступ
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;