import { Component, OnInit } from '@angular/core';

import { bounce, fade } from '../../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    animations: [bounce, fade]
})
export class AppComponent implements OnInit {
    states: string[] = [
        'in',
        'inDown',
        'inLeft',
        'inRight',
        'inUp'
    ];
    trigger:string='fade';
    state: string = 'in';
    q: string;
    list: any[] = [
        {title: 'Jacky'},
        {title: 'Helen'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    setState(state) {
        this.state = state;
        this.list.forEach(item => item.state = this.state);
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.q) return;

        this.list.push({
            title: this.q,
            state: this.state
        });
    }

    onRemoveItem(i) {
        this.list.splice(i, 1);
    }
}