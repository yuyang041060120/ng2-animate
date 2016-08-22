import {
    style,
    state,
    transition,
    animate,
    keyframes,
    AnimationMetadata
} from '@angular/core';

export const rotate = (timing: string): AnimationMetadata[] => [
    state('rotateOut', style({
        display: 'none'
    })),
    state('rotateOutDownLeft', style({
        display: 'none'
    })),
    state('rotateOutDownRight', style({
        display: 'none'
    })),
    state('rotateOutUpLeft', style({
        display: 'none'
    })),
    state('rotateOutUpRight', style({
        display: 'none'
    })),
    transition('* => rotateIn', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateIn => void, * => rotateOut', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownRight', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownRight => void, * => rotateOutDownRight', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpRight', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpRight => void, * => rotateOutUpRight', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ])
];