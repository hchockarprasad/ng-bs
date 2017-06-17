import { Injectable } from '@angular/core';

@Injectable()
export class NgBsTimerConfig {
  method = 'local';

  labelClasses = 'text-white';

  datePipe = {
    MEDIUM: 'medium'
  };

  interval = 1000;
}
