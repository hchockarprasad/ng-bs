import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgBsDateTimeModule } from './date-time/date-time.module';

export { NgBsDateTimeModule, NgBsDateTime, NgBsDateTimeConfig } from './date-time/date-time.module';

const NGBS_MODULES = [
  NgBsDateTimeModule
];

@NgModule({
  imports: [
    CommonModule,
    NgBsDateTimeModule.forRoot()
  ],
  exports: NGBS_MODULES
})
export class NgBsRootModule {
}

@NgModule({imports: NGBS_MODULES, exports: NGBS_MODULES})
export class NgBsModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgBsRootModule}; }
}
