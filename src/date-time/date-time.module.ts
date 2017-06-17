import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBsDateTime } from './date-time';
import { NgBsDateTimeConfig } from './date-time-config';

export { NgBsDateTime } from './date-time';
export { NgBsDateTimeConfig } from './date-time-config';

@NgModule({ declarations: [NgBsDateTime], exports: [NgBsDateTime], imports: [CommonModule], entryComponents: [NgBsDateTime] })
export class NgBsDateTimeModule {
  static forRoot(): ModuleWithProviders { return { ngModule: NgBsDateTimeModule, providers: [NgBsDateTimeConfig] }; }
}
