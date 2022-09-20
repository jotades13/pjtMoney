import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class GeraProducaoService {

  private baseUrl:String='';
  constructor(private http:HttpClient){
    this.baseUrl=`${environment.apiUrl}/producaocapa`;
  }

  consulta(ano:string,mes:string,fpg:string,und:string,esp:string,usr:string):Promise<any>{
    return this.http.get(this.baseUrl+`/listarproducoes?ano=${ano}&mes=${mes}&fontepg=${fpg}&unidade=${und}&especialidade=${esp}&usuario=${usr}`)
    .toPromise();
  }
// Não está funcionando
  async mudaUsuario(usuario:string,competencia:string,producao:any):Promise<any>{
    await this.http.put(this.baseUrl + `/mudancadeusuario?usuario=${usuario}&competencia=${this.preparaCompetencia(competencia)}`, producao)
      .toPromise();
    return null;
    
    // /mudancadeusuario"
  }
  
  geraproducoes(ano:string,mes:string){
    return this.http.get(this.baseUrl+`/geraproducoes?pano=${ano}&pmes=${mes}`)
    .toPromise();
  }

  teste(usr:string){
    console.log(this.preparaCompetencia(usr));
  }

//-------------012345678901
//competencia: 01/2022-0001 -> 0120220002

  preparaCompetencia(competencia:String){
    return competencia.substring(0,2)
          +competencia.substring(3,7)
          +competencia.substring(8,12);
  }
}
