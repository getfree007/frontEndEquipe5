import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/core/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

  tokenNumber : number

  constructor(private httpClient: HttpClient, token : TokenService) {
    this.tokenNumber = token.getTokenJwt().codUsuario;
  }

    public sendGetRequest(){
      return this.httpClient.get('http://localhost:3000/pedidos/'+ this.tokenNumber);
    }
}