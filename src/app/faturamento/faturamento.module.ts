import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosPesquisaComponent } from '../lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosCadastroComponent } from '../lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosGridComponent } from '../lancamentos/lancamentos-grid/lancamentos-grid.component';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from 'primeng/api';
import { GeraproducaoComponent } from './geraproducao/geraproducao.component';
import { EscalasLancamentosComponent } from './escalas-lancamentos/escalas-lancamentos.component';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GeraproducaoComponent,
    EscalasLancamentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    RadioButtonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    GeraproducaoComponent,
    EscalasLancamentosComponent

  ]
})
export class FaturamentoModule { }
