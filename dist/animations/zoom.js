"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.zoom = function (timing, options) {
    options = options || {};
    function stylize(styleDef) {
        return core_1.style(Object.assign(styleDef, options.whileStyle));
    }
    return [
        core_1.state('zoomOut', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition('* => zoomIn', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=zoom.js.map