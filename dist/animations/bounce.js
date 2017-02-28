"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.bounce = function (timing, options) {
    options = options || {};
    function stylize(styleDef) {
        return core_1.style(Object.assign(styleDef, options.whileStyle));
    }
    return [
        core_1.state('bounceOut', core_1.style({
            display: 'none'
        })),
        core_1.state('bounceOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('bounceOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('bounceOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('bounceOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition('* => bounceIn', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
                stylize({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
                stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
                stylize({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
                stylize({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
                stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
                stylize({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
                stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }),
                stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
                stylize({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
                stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }),
                stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
                stylize({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
                stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }),
                stylize({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
                stylize({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
                stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }),
                stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }),
                stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
                stylize({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
                stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 })
            ]))
        ]),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate(timing, core_1.keyframes([
                stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
                stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }),
                stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=bounce.js.map