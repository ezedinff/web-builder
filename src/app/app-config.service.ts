import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppConfigService {
  getConfig() {
    return {
      'title': false,
      'buttons': [
        {
          'label': 'File'
        }
      ]
    };
  }
}
