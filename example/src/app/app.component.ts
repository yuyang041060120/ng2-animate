import { Component } from '@angular/core';

import { animateFactory } from '../../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    animations: [animateFactory(500)]
})
export class AppComponent {
    show: boolean = true;

    animations: any[] = [
        'fadeIn',
        'fadeInDown',
        'fadeInLeft',
        'fadeInRight',
        'fadeInUp',

        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',

        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',

        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',

        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
    ];

    constructor() {
        this.animations = this.animations.map(item => {
            return {
                key: item,
                show: true,
                bg: Math.floor(Math.random() * 16777215).toString(16)
            }
        });
    }

    onToggle() {
        this.animations.forEach(item => item.show = !item.show);
    }
}