"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.slide = function (timing, options) {
    options = options || {};
    options.igniter = options.igniter || '*';
    function stylize(styleDef) {
        return core_1.style(Object.assign(styleDef, options.whileStyle));
    }
    return [
        core_1.state('slideOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.igniter + " => slideInDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, -100%, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("slideInDown => void, " + options.igniter + " => slideOutDown", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, 100%, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => slideInLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("slideInLeft => void, " + options.igniter + " => slideOutRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => slideInRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(100%, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("slideInRight => void, " + options.igniter + " => slideOutLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(-100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => slideInUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 100%, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition("slideInUp => void, " + options.igniter + " => slideOutUp", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ transform: 'translate3d(0, -100%, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=slide.js.map