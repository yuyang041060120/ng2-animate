# Description

Angular2 animations, inspired by [Animate.css](https://daneden.github.io/animate.css).

# Install 

```bash
npm install ng2-animate --save
```

# Demo

https://yuyang041060120.github.io/ng2-animate

# Usage

```javascript
import { fade } from 'ng2-animate';

@Component({
    selector: 'app',
    template: require('./app.html'),
    animations: [fade]
})
export class AppComponent implements OnInit {
    list: any[] = [
        {title: 'Jacky'},
        {title: 'Helen'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onAdd() {
        this.list.push({
            title: 'xxx',
            state: 'inLeft'
        });
    }

    onRemove(i) {
        this.list.splice(i, 1);
    }
}
```

```html
<button (click)="onAdd()">add</button>
<ul>
  <li *ngFor="let item of list;let i = index" [@fade]="item.state || 'inLeft'">
    {{item.title}}
    <span (click)="onRemove(i)" class="badge">X</span>
  </li>
</ul>
```

### other examples

```html
<p [@fade]="'in'">in</p>
<p [@fade]="'inDown'">inDown</p>
<p [@fade]="'inLeft'">inLeft</p>
<p [@fade]="'inRight'">inRight</p>
<p [@fade]="'inUp'">inUp</p>

```

# Animations

- fade(in|inDown|inLeft|inRight|inUp)
- bounce(in|inDown|inLeft|inRight|inUp)

# License

MIT