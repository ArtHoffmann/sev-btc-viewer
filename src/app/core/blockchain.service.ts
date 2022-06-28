import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private httpClient: HttpClient) { }

  public getBtcPrice(): Observable<any> {
    return this.httpClient.get<any>('https://blockchain.info/ticker');
  }

  public getBTCChartsdata(): Observable<any> {
    return this.httpClient.get<any>('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json');
  }
}
