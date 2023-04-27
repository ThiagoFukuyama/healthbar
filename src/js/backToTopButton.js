
const backToTopButton = document.getElementById("back-to-top-button")

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

window.addEventListener("scroll", toggleBackToTopButton);
window.addEventListener("load", toggleBackToTopButton);

function toggleBackToTopButton() {
    if (window.scrollY > (window.innerHeight * 1.1)) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
}
