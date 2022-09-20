import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: ` 
    <div *ngIf="temErro()">
      {{text}}
</div>
  `,
  styles: []
})
export class MessageComponent {

  @Input() error : string = '';
  @Input() control: any;
  @Input() text: string ='';

  temErro():boolean{
    return this.control.hasError(this.error) && this.control.dirty; ;
  }
}
