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
    transition('* => fadeIn', [
      animate(timing, keyframes([
        stylize({opacity: 0, offset: 0}),
        stylize({opacity: 1, offset: 1})
      ]))
    ]),
    transition('fadeIn => void, * => fadeOut', [
      animate(timing, keyframes([
        stylize({opacity: 1, offset: 0}),
        stylize({opacity: 0, offset: 1})
      ]))
    ]),
    transition('* => fadeInDown', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition('fadeInDown => void, * => fadeOutDown', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
      ]))
    ]),
    transition('* => fadeInLeft', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition('fadeInLeft => void, * => fadeOutRight', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition('* => fadeInRight', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition('fadeInRight => void, * => fadeOutLeft', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
      ]))
    ]),
    transition('* => fadeInUp', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
      ]))
    ]),
    transition('fadeInUp => void, * => fadeOutUp', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
      ]))
    ])
  ];
}