import { trigger, AnimationEntryMetadata } from '@angular/core';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';

export const animateDefaults = {
  duration   : 500,
  delay      : 0,
  easing     : 'linear',
  stagger    : 0,
  name       : 'animate',
  whileStyle : {}
}

export const animateFactory = (duration: string|number, delay: string|number, easing: string, stagger: number, name: string) => {
   const config = {
    duration:duration, 
    delay:delay, 
    easing:easing, 
    stagger:stagger, 
    name:name
   }
   return animateConfig(config);
};

export const animateConfig = (config) => {
  config = config || {}
  config.duration = config.duration==null ? animateDefaults.duration : config.duration
  config.delay = config.delay==null ? animateDefaults.delay : config.delay
  config.easing = config.easing=null ? animateDefaults.easing : config.easing
  config.stagger = config.stagger=null ? animateDefaults.stagger : config.stagger
  config.name = config.name==null ? animateDefaults.name : config.name
  config.whileStyle = config.whileStyle==null ? animateDefaults.whileStyle : config.whileStyle

  if(config.stagger){
    console.log('ng2-animate does not support stagger as of this release')
  }

  let timing: string = [
    typeof(config.duration) === 'number' ? `${config.duration}ms` : config.duration,
    typeof(config.delay) === 'number' ? `${config.delay}ms` : config.delay,
    config.easing
  ].join(' ');

  return trigger(config.name, [
    ...fade(timing, config),
    ...bounce(timing, config),
    ...rotate(timing, config),
    ...slide(timing, config),
    ...zoom(timing, config)
  ]);
};