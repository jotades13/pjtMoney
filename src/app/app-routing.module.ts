import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscalasLancamentosComponent } from './faturamento/escalas-lancamentos/escalas-lancamentos.component';
import { GeraproducaoComponent } from './faturamento/geraproducao/geraproducao.component';
import { LancamentosCadastroComponent } from './lancamentos/lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasCadastroComponent } from './pessoas/pessoas-cadastro/pessoas-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';

const routes: Routes = [
  {path: 'lancamentos',component: LancamentosPesquisaComponent},
  {path: 'lancamentos/novo',component: LancamentosCadastroComponent},
  {path: 'pessoas',component: PessoasPesquisaComponent},
  {path: 'pessoas/novo',component: PessoasCadastroComponent},
  {path: 'geraproducao', component: GeraproducaoComponent},
  {path: 'lancavaloresescalas/:competencia', component: EscalasLancamentosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
