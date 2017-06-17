import { Component, Input } from '@angular/core';

import { NgBsDateTimeConfig } from './date-time-config';

@Component({
  selector: 'ng-bs-date-time',
  template: `
    <label [class]="labelClasses">{{date | date: [datePipe]}}</label>
  `
})

export class NgBsDateTime {
  /**
   * Method by which the timer gets its initial value. This accepts following values: "remote", "local".
   */
  @Input() method: string;

  /**
   * Add label css classes for styling this component.
   */
  @Input() labelClasses: string;

  /**
   * Angular DatePipe for formatting date.
   */
  @Input() datePipe: string;

  /**
   * Timer interval for component
   */
  @Input() interval: number;

  date: Date;

  constructor(private config: NgBsDateTimeConfig) {
    this.method = config.method;

    this.labelClasses = config.labelClasses;

    this.datePipe = config.datePipe.MEDIUM;

    if (this.method === 'local') {
      this.date =  new Date();

      setInterval(() => {
          this.date =  new Date();
      }, this.interval);
    }
  }
}
