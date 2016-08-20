import { trigger, AnimationEntryMetadata } from '@angular/core';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';

export const animateFactory = (duration: string|number = 500, delay: string|number = 0, easing: string = 'linear'): AnimationEntryMetadata => {

    let params: string = [
        typeof(duration) === 'number' ? `${duration}ms` : duration,
        typeof(delay) === 'number' ? `${delay}ms` : delay,
        easing
    ].join(' ');

    return trigger('animate', [
        ...fade(params),
        ...bounce(params),
        ...rotate(params)
    ])
};