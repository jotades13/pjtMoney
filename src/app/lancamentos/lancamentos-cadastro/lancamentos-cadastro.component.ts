import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.scss']
})
export class LancamentosCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = Date();
  tipos =[
    {label:'Receita', value:'RECEITA'},
    {label:'Despesa', value:'DESPESAS'}
  ];
  categorias = [
    {label:'Alimentação', value: 1},
    {label:'Transporte', value:2}
  ];
  pessoas = [
    {label:'Jotahemmy Silva', value:1},
    {label:'Célia Maria', value:2},
    {label:'Luzimária Siqueira', value:3},
    {label:'Pedro Santos', value:4},
  ]
}
