import getBrowserScrollbarWidth from './getBrowserScrollbarWidth';
import onDocumentReady from './onDocumentReady';

let scrollbarWidth = 0;

function setScrollbarWidthProperty() {
    scrollbarWidth = getBrowserScrollbarWidth();
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
}

onDocumentReady(() => {
    setScrollbarWidthProperty();
});

window.addEventListener('resize', function () {
    setScrollbarWidthProperty();
});
