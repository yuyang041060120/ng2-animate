# Description

Angular2 animations, inspired by [Animate.css](https://daneden.github.io/animate.css).

# Install 

```bash
npm install ng2-animate --save
```

# Usage

```javascript
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app',
    template: require('./app.html'),
    animations: [animateFactory(1000, 200, 'ease-in')]
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

```html
<p [@animate]="'fadeIn'" *ngIf="show">fadeIn</p>
<button (click)="show = !show">toggle</button>


<button (click)="onAdd()">add</button>
<ul>
    <li *ngFor="let item of list;let i = index;" [@animate]="'fadeInLeft'">
        {{item}}
        <button (click)="onRemove(i)">X</button>
    </li>
</ul>
```

# Params

```javascript
animateFactory(1000, 200, 'ease-in')
```

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

# Support Animations

see online demo https://yuyang041060120.github.io/ng2-animate

# License

MIT