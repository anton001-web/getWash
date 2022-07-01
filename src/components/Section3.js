import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../redux/actions";
import {Modal} from "./Modal";

const benefits = [
    {img: './assets/images/Document.png', title: 'Просмотривайте историю заказа'},
    {img: './assets/images/Calendar.png', title: 'Создание отчета неделя/месяц/год'},
    {img: './assets/images/Chat.png', title: 'Обратная связь от клиентов'},
    {img: './assets/images/Star.png', title: 'Контроль качества работы сотрудников'},
    {img: './assets/images/Wallet.png', title: 'Бесконтактная оплата работы'}
]

const Section3 = () => {
    const dispatch = useDispatch()
    const sec3Modal = React.createRef()

    const {visibility} = useSelector(store => {
        const {modal} = store
        return modal
    })

    useEffect(() => {
        if(visibility) {
            sec3Modal.current.classList.add('active')
        } else {
            sec3Modal.current.classList.remove('active')
        }
    }, [visibility])

    const modalToggle = () => {
        dispatch(toggleModal())
    }

    return (
        <section className='section advantages-section'>
            <div className='container'>
                <div className='advantages-content'>
                    <Modal ref={sec3Modal} toggle={modalToggle}/>
                    <h1 className='advantages-title'>Стань нашим партнером и начни зарабатывать:</h1>
                    <p className='advantages-subTitle'>
                        Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, что бы получать новых клиентов и распределить нагрузку равномерно на весь день. Мы предоставляем удобные инструменты для формирования отчетов в несколько кликов и многое другое.
                    </p>
                    <div className='benefits-list'>
                        {
                            benefits && benefits.map((item, index) => (
                                <div key={index} className='benefits-item'>
                                    <img src={item.img} className='benefits-item__img'/>
                                    <p className='benefits-item__title'>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button className='benefits-btn' onClick={modalToggle}>Стать партнером</button>
                </div>
            </div>
        </section>
    )
}

export default Section3