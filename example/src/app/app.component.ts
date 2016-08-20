import { Component, OnInit } from '@angular/core';

import { bounce, fade } from '../../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [
        `p{
          width: 200px;
          height: 30px;
          background-color: red;
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