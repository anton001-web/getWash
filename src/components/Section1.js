import React from 'react'

const Section1 = () => {
    return (
        <section className='section title-section'>
            <div className='container'>
                <div className='title-section__content'>
                    <div className='title-section__info-block'>
                        <div className='title-info_block'>
                            <h1 className='title-info-block__title'>Поиск ближайшей свободной автомойки и бронирование на удобное время.</h1>
                            <p className='title-info-block__subTitle'>Мы поможем сохранить ваше время для более интересных занятий, чем стоять в очереди.</p>
                            <button className='title-info-block_btn'>Получить доступ</button>
                        </div>
                    </div>
                    <div className='title-section__img-block'>
                        <picture>
                            <source srcSet='./assets/images/iPhone12ProMockup1.png'
                                    type='image/png'
                                    className='title-section__img'
                                    media="(min-width: 767px)"
                            />
                            <source srcSet='./assets/images/iPhone12mockup31.png'
                                    type='image/png'
                                    className='title-section__img'
                                    media="(max-width: 767px)"
                            />
                            <img src="./assets/images/iPhone12ProMockup1.png" alt="image" className='title-section__img'/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1