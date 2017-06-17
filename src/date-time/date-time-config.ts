import { Injectable } from '@angular/core';

@Injectable()
export class NgBsDateTimeConfig {
  method = 'local';

  labelClasses = 'text-white';

  datePipe = {
    MEDIUM: 'medium'
  };

  interval = 1000;
}
