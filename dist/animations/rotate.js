"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.rotate = function (timing, options) {
    options = options || {};
    options.igniter = options.igniter || '*';
    function stylize(styleDef) {
        return core_1.style(Object.assign(styleDef, options.whileStyle));
    }
    return [
        core_1.state('rotateOut', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutDownLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutDownRight', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutUpLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutUpRight', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.igniter + " => rotateIn", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
                stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
            ]))
        ]),
        core_1.transition("rotateIn => void, " + options.igniter + " => rotateOut", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
                stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => rotateInDownLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
                stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
            ]))
        ]),
        core_1.transition("rotateInDownLeft => void, " + options.igniter + " => rotateOutDownLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
                stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => rotateInDownRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
                stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
            ]))
        ]),
        core_1.transition("rotateInDownRight => void, " + options.igniter + " => rotateOutDownRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
                stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => rotateInUpLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
                stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
            ]))
        ]),
        core_1.transition("rotateInUpLeft => void, " + options.igniter + " => rotateOutUpLeft", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
                stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
            ]))
        ]),
        core_1.transition(options.igniter + " => rotateInUpRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
                stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
            ]))
        ]),
        core_1.transition("rotateInUpRight => void, " + options.igniter + " => rotateOutUpRight", [
            core_1.animate(timing, core_1.keyframes([
                stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
                stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
            ]))
        ])
    ];
};
//# sourceMappingURL=rotate.js.map