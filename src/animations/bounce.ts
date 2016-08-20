import { trigger, style, transition, animate, keyframes, AnimationEntryMetadata } from '@angular/core';

import { duration } from '../config';

export const bounce: AnimationEntryMetadata = trigger('bounce', [
    transition('void => in', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
            style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
            style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
    ]),
    transition('in => void', [
        animate(duration, keyframes([
            style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
            style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
            style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
        ]))
    ]),
    transition('void => inDown', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inDown => void', [
        animate(duration, keyframes([
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1})
        ]))
    ]),
    transition('void => inLeft', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inLeft => void', [
        animate(duration, keyframes([
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('void => inRight', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}),
            style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
            style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inRight => void', [
        animate(duration, keyframes([
            style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
            style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('void => inUp', [
        animate(duration, keyframes([
            style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}),
            style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
            style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('inUp => void', [
        animate(duration, keyframes([
            style({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
            style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}),
            style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1})
        ]))
    ]),
]);