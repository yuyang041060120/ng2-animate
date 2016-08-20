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
export class AppComponent{}
```

```html
<p [@animate]="'fadeIn'">fadeIn</p>
<p [@animate]="'fadeInDown'">fadeInDown</p>
<p [@animate]="'fadeInLeft'">fadeInLeft</p>
<p [@animate]="'fadeInRight'">fadeInRight</p>
<p [@animate]="'fadeInnUp'">fadeInnUp</p>
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