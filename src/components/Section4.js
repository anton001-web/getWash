import React from 'react'
import useMatchMedia from "use-match-media-hook";

const queries = [
    '(max-width: 767px)'
]

const Section4 = () => {
    const [tablet] = useMatchMedia(queries)

    return (
        <section className='section app-section'>
            <div className='container'>
                <div className='app-content'>
                    <div className="app-content__info">
                        <div className="app-content__info-block">
                            <h1 className='app-section__title'>Хватит тратить свое время в очередях</h1>
                            <p className='app-section__subTitle'>Приложение скоро будет доступно для бета тестирования в AppStore и Google Play</p>
                            <div className='app-section__btns-block'>
                                <img className='google-btn app-btn'src="./assets/images/image1457.png" alt=""/>
                                <img className='appStore-btn app-btn' src="./assets/images/image1456.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='images-block'>
                        <div className='img-one__block ipsBlock'>
                            <img className='ipOne ipImg' src="./assets/images/iPhone12mockup31.png" alt=""/>
                        </div>
                        <div className='img-two__block ipsBlock'>
                            {
                                tablet ?  <img className='ip-img__tablet' src="./assets/images/iPhone12mockup41.png" alt=""/> : <img className='ipTwo ipImg' src="./assets/images/image.png" alt=""/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4