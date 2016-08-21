import { style, transition, animate, keyframes, AnimationStateTransitionMetadata } from '@angular/core';

export const slide = (timing: string): AnimationStateTransitionMetadata[] => [
    transition('* => slideInDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInDown => void', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInLeft', [
        animate(timing, keyframes([
            style({transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInLeft => void', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInRight', [
        animate(timing, keyframes([
            style({transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInRight => void', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInUp => void', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];