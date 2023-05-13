
const accordionButtons = [...document.querySelectorAll(".accordion .accordion__header")];
const accordionPanels = [...document.querySelectorAll(".accordion .accordion__panel")];

accordionButtons?.forEach((button) => {
    button.addEventListener("click", () => {
        // closeAllPanels();
        toggleAccordionPanel(button);
    });
})

function toggleAccordionPanel(button) {
    const isOpened = button.getAttribute("aria-expanded") === "true" ? true : false;
    const panel = button.nextElementSibling;

    if (isOpened) {
        button.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = 0;
    } else {
        button.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
}

function closeAllPanels() {
    accordionPanels.forEach((panel, i) => {
        accordionButtons[i].setAttribute("aria-expanded", "false");
        panel.style.maxHeight = 0;
    })
}