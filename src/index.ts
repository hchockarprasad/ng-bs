import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBsTimerModule } from './timer/timer.module';

export { NgBsTimerModule, NgBsTimer, NgBsTimerConfig } from './timer/timer.module';

const NGBS_MODULES = [
  NgBsTimerModule
];

@NgModule({
  imports: [
    CommonModule,
    NgBsTimerModule.forRoot()
  ],
  exports: NGBS_MODULES
})
export class NgBsRootModule {
}

@NgModule({imports: NGBS_MODULES, exports: NGBS_MODULES})
export class NgBsModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgBsRootModule}; }
}
