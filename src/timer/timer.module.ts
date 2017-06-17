import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBsTimer } from './timer';
import { NgBsTimerConfig } from './timer-config';

export { NgBsTimer } from './timer';
export { NgBsTimerConfig } from './timer-config';

@NgModule({ declarations: [NgBsTimer], exports: [NgBsTimer], imports: [CommonModule], entryComponents: [NgBsTimer] })
export class NgBsTimerModule {
  static forRoot(): ModuleWithProviders { return { ngModule: NgBsTimerModule, providers: [NgBsTimerConfig] }; }
}
