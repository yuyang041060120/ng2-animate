"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.fade = function (timing, options) {
    options = options || {};
    options.igniter = options.igniter || '*';
    function stylize(styleDef) {
        return core_1.style(Object.assign(styleDef, options.whileStyle));
    }
    return [
        core_1.state('fadeOut', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.igniter + " => fadeIn", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, offset: 0 }),
                stylize({ opacity: 1, offset: 1 })
            ]))
        ]),
        core_1.transition("fadeIn => void, " + options.igniter + " => fadeOut", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, offset: 0 }),
                stylize({ opacity: 0, offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => fadeInDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("fadeInDown => void, " + options.igniter + " => fadeOutDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => fadeInLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("fadeInLeft => void, " + options.igniter + " => fadeOutRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => fadeInRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("fadeInRight => void, " + options.igniter + " => fadeOutLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => fadeInUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("fadeInUp => void, " + options.igniter + " => fadeOutUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=fade.js.map