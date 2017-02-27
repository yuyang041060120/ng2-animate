import { trigger, AnimationEntryMetadata } from '@angular/core';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';

export const animateDefaults = {
    duration:500,
    delay:0,
    easing:'linear',
    stagger:0,
    name:'animate'
}

export const animateFactory = (duration: string|number, delay: string|number, easing: string, stagger: number, name: string) => {
    duration = duration==null ? animateDefaults.duration : duration
    delay = delay==null ? animateDefaults.delay : delay
    easing = easing=null ? animateDefaults.easing : easing
    //stagger = stagger=null ? animateDefaults.stagger : stagger
    name = name==null ? animateDefaults.name : name

    if(stagger){
        console.log('ng2-animate does not support stagger as of this release')
    }

    let timing: string = [
        typeof(duration) === 'number' ? `${duration}ms` : duration,
        typeof(delay) === 'number' ? `${delay}ms` : delay,
        easing
    ].join(' ');

    return trigger(name, [
        ...fade(timing),
        ...bounce(timing),
        ...rotate(timing),
        ...slide(timing),
        ...zoom(timing)
    ]);
};

export const animateConfig = (config) => {
   config = config || {}
   return animateFactory(config.duration, config.delay, config.easing, config.stagger, config.name);
};