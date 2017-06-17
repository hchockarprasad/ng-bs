import { Component, Input } from '@angular/core';

import { NgBsTimerConfig } from './timer-config';

@Component({
  selector: 'ng-bs-timer',
  template: `
    <label [class]="labelClasses">{{date | date: [datePipe]}}</label>
  `
})

export class NgBsTimer {
  /**
   * Method by which the timer gets its initial value. This accepts following values: "remote", "local".
   */
  @Input() method: string;

  @Input() labelClasses: string;

  @Input() datePipe: string;

  @Input() interval: number;

  date: Date;

  constructor(private config: NgBsTimerConfig) {
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
