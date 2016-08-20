import { trigger, state, style, transition, animate } from '@angular/core';

export const bounce = trigger('bounce', [
    state('in', style({
        backgroundColor: 'red'
    })),
    transition('* => in', animate('750ms ease-in'))
]);