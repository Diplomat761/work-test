/*
    получить ширину правого скроллбара в браузере,
    чтобы при блокировании скролла body не дергался
*/
export default function getBrowserScrollbarWidth() {
    const windowWidth = document.documentElement.clientWidth;
    const innerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return innerWidth - windowWidth;
}
