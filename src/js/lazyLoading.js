
const images = document.querySelectorAll("[data-src]")
const imagesOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
}


const imagesObserver = new IntersectionObserver((entries, imagesObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        }

        preloadImage(entry.target)
        imagesObserver.unobserve(entry.target)
    })
}, imagesOptions)


images.forEach((image) => {
    imagesObserver.observe(image)
})


function preloadImage(image) {
    const src = image.getAttribute("data-src")
    if (!src) {
        return
    } 

    image.setAttribute("src", src)
    image.removeAttribute("data-src")
}
