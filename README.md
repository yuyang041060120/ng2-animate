# Description

Angular2 animations, inspired by [Animate.css](https://daneden.github.io/animate.css).

### Table of Contents
- [Install](#install)
- [Examples](#examples)
  - [ngFor](#ngfor)
  - [whileStyle Example](#whilestyle-example)
- [Params](#params)
  - [duration](#duration)
  - [delay](#delay)
  - [easing](#easing)
  - [stagger](#stagger)
  - [name](#name)
  - [igniter](#igniter)
  - [whileStyle](#whilestyle)
- [Customize Defaults](#customize-defaults)
- [API](#api)
  - [animateFactory](#animatefactory)
  - [animateConfig](#animateconfig)
  - [animateDefaults](#animatedefaults)
- [Supported Animations](#supported-animations)

# Install 

```bash
npm install ng2-animate --save-dev
```

Include in Project
```
import { animateConfig, animateDefaults, animateFactory } from 'ng2-animate';
```

# Examples

## ngFor
Items will have animation as they come in and when they leave

app.js
```javascript
import { animateConfig, animateFactory } from 'ng2-animate';

@Component({
    selector: 'app',
    template: require('./app.html'),
    animations: [
        animateFactory(1000, 200, 'ease-in'),
        animateConfig({duration:200, delay:0, easing:'linear', name:'animateFast'})
    ]
})
export class AppComponent{
    show: boolean = true;
    list: string[] = ['xxx', 'yyy'];
    onAdd() {
        this.list.push('zzz');
    }
    onRemove(i) {
        this.list.splice(i, 1);
    }
}
```

app.html
```html
<p [@animate]="'fadeIn'" *ngIf="show">fadeIn</p>
<p [@animateFast]="'fadeIn'" *ngIf="show">fadeIn fast</p>
<button (click)="show = !show">toggle</button>


<button (click)="onAdd()">add</button>
<ul>
  <li *ngFor="let item of list;let i = index;" [@animate]="'fadeInLeft'">
    {{item}}
    <button (click)="onRemove(i)">X</button>
  </li>
</ul>
```

## Replace With [hidden]

```html
<p [@animate]="state">Hello World</p>
<button (click)="state = 'fadeOutDown'">hide</button>
```

## whileStyle Example
Lets always animate block elements with an absolute position

> This example also demonstrates the `igniter` option

app.js
```javascript
import { animateFactory } from 'ng2-animate';

@Component({
  selector: 'app',
  template: require('./main.html'),
  animations: [
    animateConfig({
      duration:200, delay:0, easing:'linear',
      whileStyle:{
        width:'100%',
        position:'absolute'
      }
    }),
    animateConfig({igniter:'void', name:'animateNgFor'})
  ]
})
export class AppComponent{
  view: boolean = 'main';
  list: string[] = ['xxx', 'yyy', 'zzz'];
  onAdd() {
      this.list.push('aaa');
  }
  onRemove(i) {
      this.list.splice(i, 1);
  }
}
```

main.html
```html
<a (click)="view='main'">main</a>
<a (click)="view='about'">about</a>
<a (click)="view='contact'">contact</a>
<hr />
<div style="position:relative;">
  <div *ngIf="view=='main'" [@animate]="'fadeInLeft'">
    <h2>Main View</h2>
    ....
  </div>
  <div *ngIf="view=='about'" [@animate]="'fadeInLeft'">
    <h2>About View</h2>
    ....
  </div>
  <div *ngIf="view=='contact'" [@animate]="'fadeInLeft'">
    <h2>Contact View</h2>
    <p>----- List below only animates on button actions and NOT on view=='contact' -----</p>
    <ul>
      <li *ngFor="let item of list;let i = index;" [@animateNgFor]="'fadeInLeft'">
        {{item}}
        <button (click)="onRemove(i)">X</button>
      </li>
    </ul>
    <p>Without the igniter option, the ngFor would animate even during view=='contact' stage transition</p>
  </div>
</div>
```

# Params
The configuration options available to define

### duration
the duration of the animation

- type: string | number
- optional, default value is `500ms`

### delay
the delay of the animation

- type: string | number
- optional, default value is `0`

### easing
the easing function of the animation

- type: string
- optional, default value is `linear`

### stagger
NOT YET SUPPORTED. Placeholder for future release of Angular2 with stagger support

- type: number
- optional, default value is 0

Angular2 stagger animation support tracking : [tap here](https://github.com/angular/angular/issues/7478)

### name
the animation trigger/state name registered with Angular

- type: string
- optional, default value is `animate`


### igniter
The state selector that triggers animation

- type: string
- optional, default value is `*` which means any state change triggers animation

> TIP: igniter option is most often used as `void`, which makes animation only trigger when something like `*ngIf` brings an element out of a void state

### whileStyle
A style definition that will be applied during defined animation process

- type: object
- optional

# Customize Defaults

```
import { animateDefaults } from 'ng2-animate';

animateDefaults.duration = 500
animateDefaults.delay    = 0
animateDefaults.easing   = 'linear'
animateDefaults.name     = 'animate'
animateDefaults.igniter  = '*'
animateDefaults.whileStyle.position = 'absolute'
```

# API
What resources are available for consuming

## animateFactory
Input is an array of arguments that returns an Angular2 animation stack

```
import { animateFactory } from 'ng2-animate';
animateFactory(duration: string|number, delay: string|number, easing: string, stagger: number, name: string)
```

> See [Params](#params) for more information about arguments

## animateConfig
Input is an object of attributes that returns an Angular2 animation stack

```
import { animateConfig } from 'ng2-animate';
animateConfig(config: object)
```

> See [Params](#params) for more information about attributes

## animateDefaults
Established and change animation defaults

```
import { animateDefaults } from 'ng2-animate';
```

> See [Params](#params) for more information about defaults


# Supported Animations

- fadeIn
  - fadeInDown
  - fadeInLeft
  - fadeInRight
  - fadeInUp
- bounceIn
  - bounceInDown
  - bounceInLeft
  - bounceInRight
  - bounceInUp
- rotateIn
  - rotateInDownLeft
  - rotateInDownRight
  - rotateInUpLeft
  - rotateInUpRight
- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- zoomIn
  - zoomInDown
  - zoomInLeft
  - zoomInRight
  - zoomInUp

see online demo https://yuyang041060120.github.io/ng2-animate

# License

MIT
