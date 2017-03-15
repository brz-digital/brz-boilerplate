import Mask from './mask';
import Slide from './slide';

class Common {
    constructor() {
        console.log('>>> Common constructor');

        // Instance imports
        new Mask();
        new Slide();

        // Call methods
        this.fixedI10();
        this.disableZoomGesture();
    }

    fixedI10() {
        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
            const msViewportStyle = document.createElement('style');
            msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
            document.querySelector('head').appendChild(msViewportStyle);
        }
    }

    disableZoomGesture() {
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
    }
}

export default Common;
