
const navToggle = document.querySelector("button[aria-controls='primary-navigation'")

navToggle.addEventListener("click", toggleNavigation)

function toggleNavigation() {
    let isExpanded = navToggle.getAttribute("aria-expanded") === "false" ? "true" : "false"
    navToggle.setAttribute("aria-expanded", isExpanded) 
    document.body.classList.toggle("scroll-locked")
}
