
const navToggle = document.querySelector("button[aria-controls='primary-navigation'")

navToggle.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    navToggle.ariaExpanded = navToggle.ariaExpanded === "false" ? "true" : "false"
    document.body.classList.toggle("scroll-locked")
}
