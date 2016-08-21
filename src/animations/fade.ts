import { style, transition, animate, keyframes, AnimationStateTransitionMetadata } from '@angular/core';

export const fade = (timing: string): AnimationStateTransitionMetadata[] => [
    transition('* => fadeIn', [
        animate(timing, keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1})
        ]))
    ]),
    transition('fadeIn => void', [
        animate(timing, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1})
        ]))
    ]),
    transition('* => fadeInDown', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInDown => void', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInLeft => void', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInRight', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInRight => void', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => fadeInUp', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('fadeInUp => void', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];