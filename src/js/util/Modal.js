import getBrowserScrollbarWidth from './getBrowserScrollbarWidth';

const Modal = {
    scrollOffset: 0,
    body: document.querySelector('body'),
    header: document.querySelector('.header'),
    productInfo: document.querySelector('.js-product-detail-info'),

    hideOverflow() {
        const browserScrollbarWidth = getBrowserScrollbarWidth();
        this.scrollOffset = window.scrollY;
        this.body.style.paddingRight = `${browserScrollbarWidth}px`;
        this.header.style.paddingRight = `${browserScrollbarWidth}px`;
        if (this.productInfo) {
            this.productInfo.style.paddingRight = `${browserScrollbarWidth}px`;
        }
        this.body.classList.add('body--noscroll');
        document.querySelector('html').classList.add('overflow-hidden');
        this.body.scrollTop = this.scrollOffset;
    },

    showOverflow() {
        this.body.classList.remove('body--noscroll');
        this.body.style.paddingRight = '0';
        this.header.style.paddingRight = '0';
        if (this.productInfo) {
            this.productInfo.style.paddingRight = '0';
        }
        document.querySelector('html').classList.remove('overflow-hidden');
        this.body.scrollTop = 0;
        window.scrollTo(0, this.scrollOffset);
    }
};

export default Modal;
