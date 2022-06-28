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
    return this.httpClient
      .get<any>('https://api.blockchain.info/charts/transactions-per-second?timespan=1weeks&rollingAverage=8hours&format=json&cors=true');
  }

  public getBTCChartPriceData(): Observable<any> {
    return this.httpClient
      .get<any>('https://api.blockchain.info/charts/market-price?timespan=20weeks&rollingAverage=8hours&format=json&cors=true');
  }

  public getTotalCirculatingBTC(): Observable<any> {
    return this.httpClient
      .get<any>('https://api.blockchain.info/charts/total-bitcoins?timespan=15year&format=json&cors=true');
  }


  public convertSymbolAndValueIntoBTC(symbol: string, value: number): Observable<string> {
    var url = 'https://blockchain.info/tobtc?currency=' + symbol + '&value=' + value;
    return this.httpClient.get<string>(url);
  }

  public getMarketcap(): Observable<string> {
    return this.httpClient.get<string>('https://blockchain.info/q/marketcap');
  }

  public totalBTC(): Observable<number> {
    return this.httpClient.get<number>('https://blockchain.info/q/totalbc');
  }

  public getdifficulty(): Observable<number> {
    return this.httpClient.get<number>('https://blockchain.info/q/getdifficulty');
  }

  public getlatesthash(): Observable<string> {
    return this.httpClient.get<string>('https://blockchain.info/q/latesthash');
  }

  public transactioncount(): Observable<number> {
    return this.httpClient.get<number>('https://blockchain.info/q/24hrtransactioncount');
  }

  public hrbtcsent(): Observable<number> {
    return this.httpClient.get<number>('https://blockchain.info/q/24hrbtcsent');
  }

}
