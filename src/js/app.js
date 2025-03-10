import './util/objectFitImages';
import './util/windowHeightProperty';
import onDocumentReady from './util/onDocumentReady';


import Swiper from './module/Swiper';
import Cursor from './module/Cursor';

onDocumentReady(() => {

    document.querySelectorAll('.services-slider').forEach(element => new Swiper(element));
    document.querySelectorAll('.cursor').forEach(element => new Cursor(element));
    
});
