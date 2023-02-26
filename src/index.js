
import "./scss/main.scss"
import saladImg from "./assets/img/salad.png"
import chefHatImg from "./assets/img/chef-hat.png"
import truckImg from "./assets/img/truck.png"
import testimonial1 from "./assets/img/testimonial1.jpg"
import testimonial2 from "./assets/img/testimonial2.jpg"
import testimonial3 from "./assets/img/testimonial3.jpg"
import testimonial4 from "./assets/img/testimonial4.jpg"

document.querySelector("[data-src='salad.png']").src = saladImg
document.querySelector("[data-src='chef-hat.png']").src = chefHatImg
document.querySelector("[data-src='truck.png']").src = truckImg

document.querySelector("[data-src='testimonial1.jpg']").src = testimonial1
document.querySelector("[data-src='testimonial2.jpg']").src = testimonial2
document.querySelector("[data-src='testimonial3.jpg']").src = testimonial3
document.querySelector("[data-src='testimonial4.jpg']").src = testimonial4
