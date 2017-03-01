import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

export const slide = (timing: string, options): AnimationMetadata[] => {
  options = options || {}
  options.igniter = options.igniter || '*'

  function stylize(styleDef){
    return style( Object.assign(styleDef, options.whileStyle) )
  }

  return [
    state('slideOutDown', style({
      display: 'none'
    })),
    state('slideOutLeft', style({
      display: 'none'
    })),
    state('slideOutRight', style({
      display: 'none'
    })),
    state('slideOutUp', style({
      display: 'none'
    })),
    transition(`${options.igniter} => slideInDown`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, -100%, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`slideInDown => void, ${options.igniter} => slideOutDown`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, 100%, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => slideInLeft`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`slideInLeft => void, ${options.igniter} => slideOutRight`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => slideInRight`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(100%, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`slideInRight => void, ${options.igniter} => slideOutLeft`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(-100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => slideInUp`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 100%, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`slideInUp => void, ${options.igniter} => slideOutUp`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'translate3d(0, -100%, 0)', offset: 1})
      ]))
    ])
  ]
};