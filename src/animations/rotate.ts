import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

export const rotate = (timing: string, options): AnimationMetadata[] => {
  options = options || {}
  options.igniter = options.igniter || '*'

  function stylize(styleDef){
    return style( Object.assign(styleDef, options.whileStyle) )
  }

  return [
    state('rotateOut', style({
      display: 'none'
    })),
    state('rotateOutDownLeft', style({
      display: 'none'
    })),
    state('rotateOutDownRight', style({
      display: 'none'
    })),
    state('rotateOutUpLeft', style({
      display: 'none'
    })),
    state('rotateOutUpRight', style({
      display: 'none'
    })),
    transition(`${options.igniter} => rotateIn`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
        stylize({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
      ]))
    ]),
    transition(`rotateIn => void, ${options.igniter} => rotateOut`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
        stylize({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => rotateInDownLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
      ]))
    ]),
    transition(`rotateInDownLeft => void, ${options.igniter} => rotateOutDownLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => rotateInDownRight`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
      ]))
    ]),
    transition(`rotateInDownRight => void, ${options.igniter} => rotateOutDownRight`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => rotateInUpLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
      ]))
    ]),
    transition(`rotateInUpLeft => void, ${options.igniter} => rotateOutUpLeft`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
      ]))
    ]),
    transition(`${options.igniter} => rotateInUpRight`, [
      animate(timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
      ]))
    ]),
    transition(`rotateInUpRight => void, ${options.igniter} => rotateOutUpRight`, [
      animate(timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
      ]))
    ])
  ]
};