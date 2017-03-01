import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

export const fade = (timing: string, options): AnimationMetadata[] => {
  options = options || {}
  options.igniter = options.igniter || '*'

  function stylize(styleDef){
    return style( Object.assign(styleDef, options.whileStyle) )
  }

  return [
    state('fadeOut', style({
      display: 'none'
    })),
    state('fadeOutDown', style({
      display: 'none'
    })),
    state('fadeOutLeft', style({
      display: 'none'
    })),
    state('fadeOutRight', style({
      display: 'none'
    })),
    state('fadeOutUp', style({
      display: 'none'
    })),
    transition(`${options.igniter} => fadeIn`, [
      animate(timing, keyframes([
        stylize({opacity: 0, offset: 0}),
        stylize({opacity: 1, offset: 1})
      ]))
    ]),
    transition(`fadeIn => void, ${options.igniter} => fadeOut`, [
      animate(timing, keyframes([
        stylize({opacity: 1, offset: 0}),
        stylize({opacity: 0, offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => fadeInDown`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`fadeInDown => void, ${options.igniter} => fadeOutDown`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => fadeInLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`fadeInLeft => void, ${options.igniter} => fadeOutRight`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => fadeInRight`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`fadeInRight => void, ${options.igniter} => fadeOutLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => fadeInUp`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`fadeInUp => void, ${options.igniter} => fadeOutUp`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
      ]))
    ])
  ];
}