import IMask from 'imask';

export default function initMask(input) {
    IMask(input, {
        mask: '{8} (000) 000-00-00',
        country: 'Russia',
    });
}
