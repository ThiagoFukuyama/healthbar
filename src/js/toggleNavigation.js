
const nav = document.querySelector("#primary-navigation")
const navToggle = document.querySelector("button[aria-controls='primary-navigation'")

navToggle.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    nav.classList.toggle("active")
    navToggle.ariaExpanded = navToggle.ariaExpanded === "false" ? "true" : "false"
    document.body.classList.toggle("scroll-locked")
}
