import { AnimationEntryMetadata } from '@angular/core';
export declare const animateDefaults: {
    duration: number;
    delay: number;
    easing: string;
    stagger: number;
    name: string;
    whileStyle: {};
};
export declare const animateFactory: (duration: string | number, delay: string | number, easing: string, stagger: number, name: string) => AnimationEntryMetadata;
export declare const animateConfig: (config: any) => AnimationEntryMetadata;
