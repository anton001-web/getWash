import React from 'react'

const steps = [
    {img: './assets/images/Download.png', title: 'Скачай и зарегестрируйся', subTitle: 'Наше приложение доступно в Apple Store и Google Play'},
    {img: './assets/images/Location.png', title: 'Выбери ближайшую автомойку', subTitle: 'Из свободных поблизости или оставь заказ на удобное время'},
    {img: './assets/images/Filter.png', title: 'Выбери дополнительные услуги', subTitle: 'Можешь их добавить к своему основному заказу'},
    {img: './assets/images/Wallet.png', title: 'Оплати внутри приложения', subTitle: 'Бесконтактная оплата внутри приложения и прозрачные цены'}
]

const Section2 = () => {
    return (
        <section className='section steps-section' id='steps'>
            <div className='container'>
                <div className='steps-content'>
                    <div className='steps-image__block'>
                        <img src="./assets/images/iPhone12mockup21.png" alt="iphone picture"/>
                    </div>
                    <div className='steps-sec-info__block'>
                        <div className='steps-info__block'>
                            <h1 className='steps-title'>Быстрый старт:</h1>
                            <div className='steps-list'>
                                {
                                    steps && steps.map((item, index) => (
                                        <div className='step-item'>
                                            <img src={item.img} className='step-item__img'/>
                                            <div className='step-item_text'>
                                                <h2 className='step-item__title'>{item.title}</h2>
                                                <p className='step-item__subTitle'>{item.subTitle}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2