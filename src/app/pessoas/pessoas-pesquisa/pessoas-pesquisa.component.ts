import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.scss']
})
export class PessoasPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pessoas = [
    {nome: 'JOAO MARIA',cidade: 'NATAL', estado: 'RN', status: 'Ativo'},
    {nome: 'MARIA',cidade: 'NATAL', estado: 'RN', status: 'Ativo'},
    {nome: 'JOSÉ DOS SANTOS',cidade: 'ITABUNA', estado: 'RN', status: 'Inativo'},
    {nome: 'LUZIMARIA SIQUEIRA',cidade: 'MOSSORÓ', estado: 'RN', status: 'Ativo'},
    {nome: 'MARCIO LOPES',cidade: 'NATAL', estado: 'RN', status: 'Ativo'},
    {nome: 'SUELLY SILVA',cidade: 'MACAU', estado: 'RN', status: 'Ativo'},
    {nome: 'FLÁVIO CAVALCANTE',cidade: 'PARNAMIRIM', estado: 'RN', status: 'Ativo'},
    {nome: 'JÔ SOARES',cidade: 'NATAL', estado: 'RN', status: 'Inativo'},
    {nome: 'FELIPE MARTINS',cidade: 'CEARAMIRIM', estado: 'RN', status: 'Ativo'},
    {nome: 'IDALECIO FERREIRA',cidade: 'NATAL', estado: 'RN', status: 'Inativo'},
  ]
}
