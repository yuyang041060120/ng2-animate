import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

export const zoom = (timing: string, options): AnimationMetadata[] => {
  options = options || {}
  options.igniter = options.igniter || '*'

  function stylize(styleDef){
    return style( Object.assign(styleDef, options.whileStyle) )
  }

  return [
    state('zoomOut', style({
      display: 'none'
    })),
    state('zoomOutDown', style({
      display: 'none'
    })),
    state('zoomOutLeft', style({
      display: 'none'
    })),
    state('zoomOutRight', style({
      display: 'none'
    })),
    state('zoomOutUp', style({
      display: 'none'
    })),
    transition(`${options.igniter} => zoomIn`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}),
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
      ]))
    ]),
    transition(`zoomIn => void, ${options.igniter} => zoomOut`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => zoomInDown`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6}),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`zoomInDown => void, ${options.igniter} => zoomOutDown`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4}),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => zoomInLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`zoomInLeft => void, ${options.igniter} => zoomOutRight`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => zoomInRight`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`zoomInRight => void, ${options.igniter} => zoomOutLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => zoomInUp`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6}),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition(`zoomInUp => void, ${options.igniter} => zoomOutUp`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4}),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1})
      ]))
    ])
  ]
};