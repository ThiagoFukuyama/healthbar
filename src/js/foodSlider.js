
import Swiper, { Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const foodSlider = new Swiper(".food-slider", {
    modules:  [Pagination, Autoplay],
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    slidesOffsetAfter: 0,
    centeredSlides: true,

    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
