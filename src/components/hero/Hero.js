import React from 'react';
import './_hero.scss';
import image1 from '../image/image8.jpg'

function Hero() {
    return (
        <div className='hero'>
            <div className="hero__text">
                <h1 className='hero__text--first'>Bestseller</h1>
                <div>
                    <h2 className='hero__text--second'>Made of the highest quality materials. </h2>
                    <h2 className='hero__text--second'>Exceptional design.</h2>
                </div>
                <button className='hero__text--btn'>BUY</button>
            </div>
                <img src={image1} alt='hoodie' />

        </div>
    );
}

export default Hero;