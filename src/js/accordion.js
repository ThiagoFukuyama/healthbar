const accordionButtons = [
    ...document.querySelectorAll(".accordion .accordion__header"),
];
const accordionPanels = [
    ...document.querySelectorAll(".accordion .accordion__panel"),
];

accordionButtons?.forEach((button, index) => {
    button.addEventListener("click", () => {
        closeAllPanels(index);
        toggleAccordionPanel(button);
    });
});

function toggleAccordionPanel(button) {
    const panel = button.nextElementSibling;
    const isOpened = button.getAttribute("aria-expanded") === "true";

    if (isOpened) {
        button.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
        panel.style.maxHeight = "0px";
    } else {
        button.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
}

function closeAllPanels(except) {
    accordionPanels.forEach((panel, index) => {
        if (except !== index) {
            accordionButtons[index].setAttribute("aria-expanded", "false");
            panel.setAttribute("aria-hidden", "true");
            panel.style.maxHeight = "0px";
        }
    });
}
