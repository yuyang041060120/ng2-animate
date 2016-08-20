import { Component, OnInit } from '@angular/core';

import { bounce, fade } from '../../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [
        `.app{
          opacity: 0;
        }`
    ],
    animations: [bounce, fade]
})
export class AppComponent implements OnInit {
    state: string = '';

    constructor() {
    }

    ngOnInit() {
    }

    onClickIn() {
        this.state = 'in';
    }

    onClickOut() {
        this.state = 'out';
    }
}