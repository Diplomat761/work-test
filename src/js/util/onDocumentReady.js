const queue = [];
let isDocumentReady = false;
const onDocumentReady = (func) => {
    if (isDocumentReady) {
        func();
    } else {
        queue.push(func);
    }
};

window.onload = () => {
    isDocumentReady = true;
    queue.forEach((func) => {
        func();
    });
};

export default onDocumentReady;
