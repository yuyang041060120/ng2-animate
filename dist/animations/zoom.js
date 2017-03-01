"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.zoom = function (timing, options) {
    options = options || {};
    options.igniter = options.igniter || '*';
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
        core_1.transition(options.igniter + " => zoomIn", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
            ]))
        ]),
        core_1.transition("zoomIn => void, " + options.igniter + " => zoomOut", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => zoomInDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("zoomInDown => void, " + options.igniter + " => zoomOutDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => zoomInLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("zoomInLeft => void, " + options.igniter + " => zoomOutRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => zoomInRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("zoomInRight => void, " + options.igniter + " => zoomOutLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => zoomInUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
                stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("zoomInUp => void, " + options.igniter + " => zoomOutUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
                stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=zoom.js.map