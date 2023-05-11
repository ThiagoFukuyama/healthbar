import Swiper, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const foodSlider = new Swiper(".dish-slider", {
    modules: [Pagination, Autoplay],
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    slidesOffsetAfter: 0,
    centeredSlides: true,

    speed: 1300,
    autoplay: {
        delay: 4500,
        disableOnInteraction: true,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const buttonPrev = document.querySelector(".dish-slider-button-prev");
const buttonNext = document.querySelector(".dish-slider-button-next");

buttonPrev.addEventListener("click", () => foodSlider.slidePrev());
buttonNext.addEventListener("click", () => foodSlider.slideNext());
