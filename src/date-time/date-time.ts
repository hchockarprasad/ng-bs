import { Component, Input } from '@angular/core';

import { NgBsDateTimeConfig } from './date-time-config';

@Component({
  selector: 'ng-bs-date-time',
  template: `
    <label [class]="labelClasses">{{date | date: [format]}}</label>
  `
})

export class NgBsDateTime {
  /**
   * Add label css classes for styling this component.
   */
  @Input() labelClasses: string;

  /**
   * Angular DatePipe for formatting date.
   */
  @Input() format: string;

  /**
   * Timer interval for component
   */
  @Input() interval: number;

  date: Date;

  constructor(private config: NgBsDateTimeConfig) {

    this.labelClasses = config.labelClasses;

    this.format = config.datePipe.MEDIUM;

    this.date = new Date();

    setInterval(() => {
      this.date = new Date();
    }, this.interval);
  }
}
