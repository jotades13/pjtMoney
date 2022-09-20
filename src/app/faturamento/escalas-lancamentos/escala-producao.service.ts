import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class EscalaProducaoService {

  private baseUrl:String='';
  constructor(private http:HttpClient){
    this.baseUrl=`${environment.apiUrl}/producaovalores`;
  }


  consultaCompetencia(competencia:string):Promise<any>{
    competencia=this.preparaCompetencia(competencia);
    return this.http.get(this.baseUrl+`/listarproducao?competencia=${competencia}`)
    .toPromise();
  }

  preparaCompetencia(competencia:String){
    return competencia.substring(0,2)
          +competencia.substring(3,7)
          +competencia.substring(8,12);
  }

}
