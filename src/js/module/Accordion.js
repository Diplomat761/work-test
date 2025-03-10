export default class Accordion {
    constructor(element) {
        if (!element) {
            return;
        }

        Object.assign(this, {
            UI: {
                accordions: document.querySelectorAll('.js-accordion'),
                btn: element.querySelector('.js-accordion-btn'),
            },
        });

        this.UI.btn.addEventListener('click', (e) => {
            e.preventDefault();
            this.UI.accordions.forEach((accordion) => {
                if (accordion === element) {
                    return;
                }
                accordion.classList.remove('ui-accordion--active');
            });
            element.classList.toggle('ui-accordion--active');
        });
    }
}
