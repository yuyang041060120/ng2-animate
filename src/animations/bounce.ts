import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

export const bounce = (timing: string, options): AnimationMetadata[] => {
  options = options || {}
  options.igniter = options.igniter || '*'

  function stylize(styleDef){
    return style( Object.assign(styleDef, options.whileStyle) )
  }

  return [
    state('bounceOut', style({
      display: 'none'
    })),
    state('bounceOutDown', style({
      display: 'none'
    })),
    state('bounceOutLeft', style({
      display: 'none'
    })),
    state('bounceOutRight', style({
      display: 'none'
    })),
    state('bounceOutUp', style({
      display: 'none'
    })),
    transition(`${options.igniter} => bounceIn`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
        stylize({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
        stylize({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
        stylize({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
        stylize({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
      ]))
    ]),
    transition(`bounceIn => void, ${options.igniter} => bounceOut`, [
      animate(timing, keyframes([
        stylize({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
        stylize({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
        stylize({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
      ]))
    ]),
    transition(`${options.igniter} => bounceInDown`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}),
        stylize({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
        stylize({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`bounceInDown => void, ${options.igniter} => bounceOutDown`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
        stylize({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}),
        stylize({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => bounceInLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
        stylize({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
        stylize({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`bounceInLeft => void, ${options.igniter} => bounceOutRight`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}),
        stylize({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => bounceInRight`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}),
        stylize({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
        stylize({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`bounceInRight => void, ${options.igniter} => bounceOutLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
        stylize({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => bounceInUp`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
        stylize({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
        stylize({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`bounceInUp => void, ${options.igniter} => bounceOutUp`, [
      animate(timing, keyframes([
        stylize({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
        stylize({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}),
        stylize({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1})
      ]))
    ]
  )
]};