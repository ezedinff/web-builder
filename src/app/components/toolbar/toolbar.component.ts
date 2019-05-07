import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template:     '<div fxLayout="row">' +
    '<div fxFlex *ngIf="title">{{title}}</div>' +
    '<div fxFlex>' +
    '<button mat-button *ngFor="let button of buttons">{{button?.label}}</button>' +
    '</div>' +
    '</div>'
})
export class ToolbarComponent {
  @Input() title;
  @Input() buttons;
}
