import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

const duration = 500;

export const fade = trigger('fade', [
    state('in', style({
        opacity: 1
    })),
    state('inDown', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    state('inLeft', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    state('inRight', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    state('inUp', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
    })),
    state('out', style({
        opacity: 0
    })),
    state('outDown', style({
        opacity: 0,
        // transform: 'translate3d(0, 100%, 0)'
    })),
    state('outLeft', style({
        opacity: 0,
        // transform: 'translate3d(-100%, 0, 0)'
    })),
    state('outRight', style({
        opacity: 0,
        // transform: 'translate3d(100%, 0, 0)'
    })),
    state('outUp', style({
        opacity: 0,
        // transform: 'translate3d(0, -100%, 0)'
    })),
    transition('* => in', [
        animate(duration, keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1})
        ]))
    ]),
    transition('* => inDown', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => inLeft', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => inRight', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => inUp', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => out', [
        animate(duration, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1})
        ]))
    ]),
    transition('* => outDown', [
        animate(duration, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => outLeft', [
        animate(duration, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => outRight', [
        animate(duration, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => outUp', [
        animate(duration, keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
]);