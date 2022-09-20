import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule} from 'primeng/card';

import { ButtonModule} from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { TableModule} from 'primeng/table';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { CalendarModule} from 'primeng/calendar';
import { SelectButtonModule} from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule} from 'primeng/inputnumber';
import { InputMaskModule} from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule} from '@angular/common/http';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CoreModule } from './core/core.module';
import { GeraProducaoService } from './faturamento/geraproducao/gera-producao.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import { SharedModule } from './shared/shared.module';
import { EscalaProducaoService } from './faturamento/escalas-lancamentos/escala-producao.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    InputMaskModule,
    LancamentosModule,
    PessoasModule,
    CoreModule,
    HttpClientModule,
    RadioButtonModule,
    CheckboxModule,
    SharedModule
  ],
  providers: [
    GeraProducaoService,
    EscalaProducaoService 
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
