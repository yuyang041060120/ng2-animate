import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent implements OnInit {
    form: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.form);
    }

}