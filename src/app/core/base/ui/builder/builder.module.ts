import {NgModule} from '@angular/core';
import {BuilderComponent} from './containers/builder.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarModule} from '../../../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [BuilderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BuilderComponent}]),
    FlexLayoutModule,
    ToolbarModule
  ],
  exports: [BuilderComponent, RouterModule]
})
export class BuilderModule { }
