// import $ from 'jquery';
import Modal from './Modal';

const Popup = {
    callbacks: {
        show: {},
        hide: {}
    },

    onShow(name, callback) {
        this.callbacks.show[name] = callback;
    },

    onHide(name, callback) {
        this.callbacks.hide[name] = callback;
    },

    show(name) {
        if (this.callbacks.show[name]) {
            this.callbacks.show[name]();
        }

        Modal.hideOverflow();

        const popup = document.querySelector(`.ui-popup[data-popup="${name}"]`);
        if (!popup.classList.contains('ui-popup--active')) {
            popup.classList.add('ui-popup--active');
            // .css('display', 'flex')
            // .hide()
            // .fadeIn();
        }
    },

    get(name) {
        return document.querySelector(`.ui-popup[data-popup="${name}"]`);
    },

    hide(name = '') {
        if (this.callbacks.hide[name]) {
            this.callbacks.hide[name]();
        }

        const popup = this.get(name);
        // if (popup.classList.contains('ui-popup--noclose')) {
        //     return;
        // }

        document.querySelectorAll('.ui-popup').forEach((popup) => {
            popup.classList.remove('ui-popup--active');
            setTimeout(() => {
                Modal.showOverflow();
            }, 350);
        });
    },
};
window.popup = Popup;

export default Popup;
