import React from 'react'

export const Modal = React.forwardRef((props, ref) => {
    return (
        <div className='modal-overlay' ref={ref}>
            <div className='modal'>
                <div className='modal-close__block'><button onClick={props.toggle} className='modal-close'>&times;</button></div>
                <div className='modal-body'>
                    <h1 className='modal-title'>Стань нашим партнером и начни зарабатывать: </h1>
                    <div className='name-field__block field_block'>
                        <div className='name-field__icon field_icon'><img src="./assets/images/Edit.png" className='modal-field__icon'/></div>
                        <input type="text" className='name-field field' placeholder='Введите имя'/>
                    </div>
                    <div className='mail-field__block field_block'>
                        <div className='mail-field__icon field_icon'><img src="./assets/images/Message.png" className='modal-field__icon'/></div>
                        <input type="text" className='mail-field field' placeholder='E-mail'/>
                    </div>
                    <div className='phone-field__block field_block'>
                        <div className='phone-field__icon field_icon'><img src="./assets/images/Call.png" className='modal-field__icon'/></div>
                        <input type="text" className='phone-field field' placeholder='Номер телефона'/>
                    </div>
                    <div className='additional-opt'>
                        <input type="checkbox" className='checkbox'  id='news-getting'/>
                        <label className='checkbox-title' for='news-getting'>Я хочу получать новости на почтовый адрес</label>
                    </div>
                    <div className='additional-opt'>
                        <input type="checkbox" className='checkbox' id='data-picking'/>
                        <label className='checkbox-title' for='data-picking'>Я согласен учавствовать в сборе данных</label>
                    </div>
                    <button className='modal-btn'>
                        Получить доступ
                    </button>
                    <span className='modal-footer__text'>
                        Нажимая кнопку Вы принимаете <a href="#">Политику конфидециальности</a>
                    </span>
                </div>
            </div>
        </div>
    )
})

