import {
    style,
    state,
    transition,
    animate,
    keyframes,
    AnimationMetadata
} from '@angular/core';

export const slide = (timing: string): AnimationMetadata[] => [
    state('slideOutDown', style({
        display: 'none'
    })),
    state('slideOutLeft', style({
        display: 'none'
    })),
    state('slideOutRight', style({
        display: 'none'
    })),
    state('slideOutUp', style({
        display: 'none'
    })),
    transition('* => slideInDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInDown => void, * => slideOutDown', [
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
    transition('slideInLeft => void, * => slideOutRight', [
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
    transition('slideInRight => void, * => slideOutLeft', [
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
    transition('slideInUp => void, * => slideOutUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];