import { trigger, state, style, transition, animate } from '@angular/core';

export const fade = trigger('fade', [
    state('in', style({
        opacity: 1
    })),
    state('out', style({
        opacity: 0
    })),
    transition('void => *', style({
        opacity: 0
    })),
    transition('* => in, * => out', animate('750ms ease-in'))
]);