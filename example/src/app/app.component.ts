import { Component } from '@angular/core';

import { animateFactory } from '../../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    animations: [animateFactory()]
})
export class AppComponent {
    show: boolean = true;
    state: string = 'fadeIn';

    constructor() {
    }
}