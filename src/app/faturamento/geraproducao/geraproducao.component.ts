import { Component, Injectable, OnInit } from '@angular/core';
import { GeraProducaoService } from 'src/app/faturamento/geraproducao/gera-producao.service';
import { ProducaoModel } from './producaoModel';

@Component({
  selector: 'app-geraproducao',
  templateUrl: './geraproducao.component.html',
  styleUrls: ['./geraproducao.component.scss']
})
@Injectable()
export class GeraproducaoComponent implements OnInit {

  producoes:ProducaoModel[]=[];

  constructor(
    private producaoService:GeraProducaoService
    ) { }
  
  ngOnInit(): void {
    }
  
  colunas=[
    {cabecalho:'Competência'},
    {cabecalho:'Descrição'},
    {cabecalho:'Usuario'},
    {cabecalho:'Mudança de Usuário'}
  ];

  tipos =[
    {label:'Procedimento', value:'PROCEDIMENTOS'},
    {label:'Escala', value:'ESCALAS'}
  ];
  opcaoano=[
    {label:'2021', value: 2021},
    {label:'2022', value:2022},
    {label:'2023', value:2023}
  ];
  opcaomes=[
    {label:'Janeiro', value: 1},
    {label:'Fevereiro', value:2},
    {label:'Março', value:3},
    {label:'Abril', value:4},
    {label:'Maio', value:5},
    {label:'Junho', value:6},
    {label:'Julho', value:7},
    {label:'Agosto', value:8},
    {label:'Setembro', value:9}, 
    {label:'Outubro', value:10},
    {label:'Novembro', value:11},
    {label:'Dezembro', value:12}
  ];

  consulta(ano:string,mes:string,fpg:string,und:string,esp:string,usr:string){
    this.producaoService.consulta(ano,mes,fpg,und,esp,usr).
    then(dados =>{this.producoes=dados;}
    );
  }

  mudaUsuario(usr:string,cmpt:string,valor:any){
    this.producaoService.mudaUsuario(usr,cmpt,null);
  }

  geraproducoes(ano:string,mes:string){
    this.producaoService.geraproducoes(ano,mes);
  }
}    

