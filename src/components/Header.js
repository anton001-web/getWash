import React from 'react'


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <h1 className='header-logo'>GetWash</h1>
                    <ul className='header-list'>
                        <li className='header-list__item' data-m>Как использовать</li>
                        <li className='header-list__item' data-m>Партнерам</li>
                        <li className='header-list__item' data-m>Скачать</li>
                        <li className='header-list__item'>Отзывы</li>
                    </ul>
                    <button className='header-btn'>
                        Получить доступ
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header