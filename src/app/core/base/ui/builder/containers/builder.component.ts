import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../../../../../app-config.service';

@Component({
  selector: 'app-builder',
  template: '<app-toolbar [title]="config?.title" [buttons]="config?.buttons"></app-toolbar>'
})
export class BuilderComponent implements OnInit {
  config;
  constructor(public appconfig: AppConfigService) {}
  ngOnInit(): void {
    this.config = this.appconfig.getConfig();
  }
}
