import React from 'react';
import Hero from "../hero/Hero";
import Newsletter from "../newsletter/Newsletter";
import Slider from "../slider/Slider";


function MainPage(props) {
    return (
        <>
            <Hero />
            <Slider />
            <Newsletter />
        </>
    );
}

export default MainPage;