import { trigger, style, transition, animate, keyframes } from '@angular/core';

import { duration } from '../config';

export const fade = trigger('fade', [
    transition('void => in', [
        animate(duration, keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1})
        ]))
    ]),
    transition('in => void', [
        animate(duration, style({
            opacity: 0
        }))
    ]),
    transition('void => inDown', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inDown => void', [
        animate(duration, style({
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
        }))
    ]),
    transition('void => inLeft', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inLeft => void', [
        animate(duration, style({
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
        }))
    ]),
    transition('void => inRight', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inRight => void', [
        animate(duration, style({
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
        }))
    ]),
    transition('void => inUp', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inUp => void', [
        animate(duration, style({
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
        }))
    ]),
]);