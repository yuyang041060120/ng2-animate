import {
    style,
    state,
    transition,
    animate,
    keyframes,
    AnimationMetadata
} from '@angular/core';

export const bounce = (timing: string): AnimationMetadata[] => [
    state('bounceOut', style({
        display: 'none'
    })),
    state('bounceOutDown', style({
        display: 'none'
    })),
    state('bounceOutLeft', style({
        display: 'none'
    })),
    state('bounceOutRight', style({
        display: 'none'
    })),
    state('bounceOutUp', style({
        display: 'none'
    })),
    transition('* => bounceIn', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
            style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
    ]),
    transition('bounceIn => void, * => bounceOut', [
        animate(timing, keyframes([
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
            style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
        ]))
    ]),
    transition('* => bounceInDown', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInDown => void, * => bounceOutDown', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInLeft', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInLeft => void, * => bounceOutRight', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInRight', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInRight => void, * => bounceOutLeft', [
        animate(timing, keyframes([
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => bounceInUp', [
        animate(timing, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('bounceInUp => void, * => bounceOutUp', [
        animate(timing, keyframes([
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1})
        ]))
    ])
];