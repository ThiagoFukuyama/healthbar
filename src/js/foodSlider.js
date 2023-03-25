
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const foodSlider = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,

    speed: 1000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
