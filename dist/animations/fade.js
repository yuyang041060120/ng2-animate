"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.fade = function (timing, options) {
    options = options || {};
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
        core_1.transition('* => fadeIn', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, offset: 0 }),
                stylize({ opacity: 1, offset: 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, offset: 0 }),
                stylize({ opacity: 0, offset: 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
                stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=fade.js.map