import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './_slider.scss';
import { EffectFade, Navigation, Pagination } from "swiper";

import img1 from '../image/slider1.jpg'
import img2 from '../image/slider2.jpg'
import img3 from '../image/slider3.jpg'
import img4 from '../image/slider4.jpg'
import img5 from '../image/slider5.jpg'


function Slider(props) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img4} alt='hoodie' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt='hoodie' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt='hoodie' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt='hoodie' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt='hoodie' />
                </SwiperSlide>

            </Swiper>
        </>


    );
}

export default Slider;