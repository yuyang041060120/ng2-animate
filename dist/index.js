"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
exports.animateDefaults = {
    duration: 500,
    delay: 0,
    easing: 'linear',
    stagger: 0,
    name: 'animate',
    igniter: '*',
    whileStyle: {}
};
exports.animateFactory = function (duration, delay, easing, stagger, name) {
    var config = {
        duration: duration,
        delay: delay,
        easing: easing,
        stagger: stagger,
        name: name
    };
    return exports.animateConfig(config);
};
exports.animateConfig = function (config) {
    config = config || {};
    config.duration = config.duration == null ? exports.animateDefaults.duration : config.duration;
    config.delay = config.delay == null ? exports.animateDefaults.delay : config.delay;
    config.easing = config.easing = null ? exports.animateDefaults.easing : config.easing;
    config.stagger = config.stagger = null ? exports.animateDefaults.stagger : config.stagger;
    config.name = config.name == null ? exports.animateDefaults.name : config.name;
    config.igniter = config.igniter == null ? exports.animateDefaults.igniter : config.igniter;
    config.whileStyle = config.whileStyle == null ? exports.animateDefaults.whileStyle : config.whileStyle;
    if (config.stagger) {
        console.log('ng2-animate does not support stagger as of this release');
    }
    var timing = [
        typeof (config.duration) === 'number' ? config.duration + "ms" : config.duration,
        typeof (config.delay) === 'number' ? config.delay + "ms" : config.delay,
        config.easing
    ].join(' ');
    return core_1.trigger(config.name, fade_1.fade(timing, config).concat(bounce_1.bounce(timing, config), rotate_1.rotate(timing, config), slide_1.slide(timing, config), zoom_1.zoom(timing, config)));
};
//# sourceMappingURL=index.js.map