import gsap from 'gsap';

export default class Tabs {
    constructor(tabsElement) {
        if (!tabsElement) {
            return;
        }

        this.element = tabsElement;
        this.buttons = this.element.querySelectorAll('.js-tabs-button');
        this.content = this.element.querySelectorAll('.js-tabs-content');

        this.buttonActiveClass = 'ui-tabs-button--active';
        this.contentActiveClass = 'ui-tabs-content--active';

        this.addEventListeners();
    }

    addEventListeners() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', () => {
                if (button.classList.contains(this.buttonActiveClass)) {
                    return;
                }

                const tabName = button.getAttribute('data-tab');

                this.buttons.forEach((btn) => {
                    btn.classList.remove(this.buttonActiveClass);
                });

                button.classList.add(this.buttonActiveClass);

                this.content.forEach((content) => {
                    this.close(content);
                });

                this.open(this.element.querySelector(`.js-tabs-content[data-tab="${tabName}"]`));
            });
        });
    }

    open = (tabContent) => {
        const tl = gsap.timeline();

        tabContent.classList.add(this.contentActiveClass);
        tl.to(
            tabContent,
            {
                opacity: 1,
                duration: 0.3,
            },
            '<',
        );
    }

    close = (tabContent) => {
        const tl = gsap.timeline();

        tl.to(
            tabContent,
            {
                opacity: 0,
                duration: 0.3,
            },
            '<',
        );
        tabContent.classList.remove(this.contentActiveClass);
    }
}
