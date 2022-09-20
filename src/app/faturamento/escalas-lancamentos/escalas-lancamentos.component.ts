import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscalaProducaoService } from './escala-producao.service';
import { EscalaProducaoModel } from './escalaProducaoModel';

@Component({
  selector: 'app-escalas-lancamentos',
  templateUrl: './escalas-lancamentos.component.html',
  styleUrls: ['./escalas-lancamentos.component.scss']
})
export class EscalasLancamentosComponent implements OnInit {

  valorPlantao:number=0.0;
  horaPlantao:number=0.0;
  lancamentos:EscalaProducaoModel[]=[];
  competencia:string='';
  descricao:string='';
  
  constructor(
    private escalasService:EscalaProducaoService,
    private router: ActivatedRoute
    ) {}
  
  ngOnInit(): void {
    this.competencia = this.router.snapshot.params['competencia'];
    this.consultaCompetencia();
    this.valorPlantao=100.0;
    this.horaPlantao=12;
    this.descricao='';
  }
  
  colunas=[
    {cabecalho:'CrmUF'},
    {cabecalho:'Nome do Cooperado'},
    {cabecalho:'Plantão(es)'},
    {cabecalho:'Valor'},
    {cabecalho:'Tipo.Lanç.'},
    {cabecalho:'Usuário'},
    {}
  ];
  tipoLancamento:string[]=
  [
    'Plantonista',
    'Diretor',
    'Extra'
  ];
  
  @Input() captura: boolean = true;

  escalaLancamentos:EscalaProducaoModel[]=[];

  consultaCompetencia(){
    this.escalasService.consultaCompetencia(this.competencia).
    then(dados =>{this.escalaLancamentos=dados;}
    );
  }

}