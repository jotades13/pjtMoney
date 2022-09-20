import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FaturamentoModule } from '../faturamento/faturamento.module';



@NgModule({
  declarations: [
    MessageComponent,
    CampoColoridoDirective
  ],
  imports: [
    CommonModule,
    FaturamentoModule
  ],
  exports:[
    MessageComponent,
    FaturamentoModule
  ]
})
export class SharedModule { }
