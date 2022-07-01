import React, {useState} from 'react'

const sliderData = [
    {img: './assets/images/john.png', title: 'Антон', subTitle: 'Водитель', review: 'Хорошее приложение'},
    {img: './assets/images/john.png', title: 'Егор', subTitle: 'Водитель', review: 'Плохое приложение'},
    {img: './assets/images/john.png', title: 'Саша', subTitle: 'Водитель', review: 'Среднее приложение'},
]

const Section5 = () => {
    const [current, setCurrent] = useState(0)
    const slides = sliderData.length

    const prevSlide = () => setCurrent(current === 0 ? slides - 1 : current - 1)
    const nextSlide = () => setCurrent(current === slides - 1 ? 0 : current + 1)

    return (
        <section className='section review-section'>
            <div className='container'>
                <div className='review-content'>
                    <div className='review-header'>
                        <div className='review-info'>
                            <h1 className='review-title'>Отзывы о приложении</h1>
                            <p className='review-subTitle'>{sliderData[current].review}</p>
                        </div>
                        <div className='slider-controls'>
                            <button className='slider-control btn-prev' onClick={prevSlide}><img src="./assets/images/chevron-right.png" alt=""/></button>
                            <button className='slider-control btn-next' onClick={nextSlide}><img className='chevron-next' src="./assets/images/chevron-right.png" alt=""/></button>
                        </div>
                    </div>
                    <div className='review-slider'>
                        {
                            sliderData && sliderData.map((item,index) => (
                                <div className={current === index ? 'slide slide-active' : 'slide'}>
                                    {
                                        index === current && (
                                            <>
                                                <img src={item.img} alt=""/>
                                                <div>
                                                    <h2 className='slide-title'>{item.title}</h2>
                                                    <p className='slide-subTitle'>{item.subTitle}</p>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            ))
                        }
                        <div className='slider-controls__hidden'>
                            <button className='slider-control btn-prev' onClick={prevSlide}><img src="./assets/images/chevron-right.png" alt=""/></button>
                            <button className='slider-control btn-next' onClick={nextSlide}><img className='chevron-next' src="./assets/images/chevron-right.png" alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5