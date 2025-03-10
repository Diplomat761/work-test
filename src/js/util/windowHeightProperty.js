import onDocumentReady from './onDocumentReady';

let vh;

function setWindowHeightProperty() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onDocumentReady(() => {
    setWindowHeightProperty();
});

window.addEventListener('resize', function () {
    setWindowHeightProperty();
});
