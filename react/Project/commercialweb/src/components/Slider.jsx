import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
    return (
        <Swiper spaceBetween={30} autoplay={{ delay: 2500 }} loop={true}>
            <SwiperSlide><img src="/assets/banner1.jpg" alt="Banner 1" /></SwiperSlide>
            <SwiperSlide><img src="/assets/banner2.jpg" alt="Banner 2" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;
