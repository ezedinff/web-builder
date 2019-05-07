import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar.component';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
