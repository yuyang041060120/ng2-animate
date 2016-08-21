import { style, transition, animate, keyframes, AnimationStateTransitionMetadata } from '@angular/core';

export const rotate = (timing: string): AnimationStateTransitionMetadata[] => [
    transition('* => rotateIn', [
        animate(timing, keyframes([
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateIn => void', [
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
    transition('rotateInDownLeft => void', [
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
    transition('rotateInDownRight => void', [
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
    transition('rotateInUpLeft => void', [
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
    transition('rotateInUpRight => void', [
        animate(timing, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ])
];