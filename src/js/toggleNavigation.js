const navToggle = document.querySelector(
    "button[aria-controls='primary-navigation'"
);
const headerLogo = document.querySelector(".primary-header .logo");

navToggle.addEventListener("click", toggleNavigation);

function toggleNavigation() {
    let isExpanded =
        navToggle.getAttribute("aria-expanded") === "false" ? "true" : "false";
    navToggle.setAttribute("aria-expanded", isExpanded);

    headerLogo.classList.toggle("logo-white");
    document.body.classList.toggle("scroll-locked");
}
