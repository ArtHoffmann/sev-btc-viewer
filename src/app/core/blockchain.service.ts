import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private httpClient: HttpClient) {
  }

  public getBtcPrice(): Observable<any> {
    return this.httpClient.get<any>('https://blockchain.info/ticker');
  }

  public getBTCChartsdata(): Observable<any> {
    let header = new HttpHeaders();
    header.append('content-type', 'application/json');
    header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    header.append('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');

    return this.httpClient
      .get<any>('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json', {headers: header, withCredentials: true} );
  }

  public convertSymbolAndValueIntoBTC(symbol: string , value: number): Observable<string> {
    var url = 'https://blockchain.info/tobtc?currency=' + symbol + '&value=' + value;
    return this.httpClient.get<string>(url);
  }

  public getMarketcap(): Observable<string>{
    return this.httpClient.get<string>('https://blockchain.info/q/marketcap');
  }

  public totalBTC(): Observable<string>{
    return this.httpClient.get<string>('https://blockchain.info/q/totalbc');
  }
}
