import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlockchainService} from '../core/blockchain.service';
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  btc: any;
  marketcap: any;
  volumeBTC?: Observable<number>;
  key: any;
  values: any;

  priceArray: Observable<any> | undefined;
  circulatingBTC: Observable<any> | undefined;
  btcPrice: any;
  totalBTC: any;

  // details
  difficulty?: Observable<number>;
  latestHash?: Observable<string>;
  transactionCount?: Observable<number>;
  csent?: Observable<number>;


  waehrungen = [
    'USD',
    'AUD',
    'RUB',
    'ARS',
    'CHF',
  ]

  constructor(private blockChainService: BlockchainService) {
  }

  ngOnInit(): void {
    this.blockChainService.getBtcPrice()
      // .pipe(map(response => this.values = response), tap(x => console.log(x)))
      .subscribe(
        data => this.btc = data,
        error => console.log(error)
      );

    this.priceArray = this.blockChainService.getBTCChartPriceData().pipe(map(x => x.values), map(koordinaten => {
      let items = koordinaten.map((item: any) => {
        var a = new Date(item.x);
        console.log(a);
        return {'name': 'btc', value: [a, item.y]};
      });
      return items;
    })).pipe(tap(x => console.log(x)));

    this.circulatingBTC = this.blockChainService.getTotalCirculatingBTC().pipe(map(x => x.values), map(koordinaten => {
      let items = koordinaten.map((item: any) => {
        var a = new Date(item.x);
        console.log(a);
        return {'name': 'btc', value: [a, item.y]};
      });
      return items;
    })).pipe(tap(x => console.log(x)));

    this.btcPrice = this.blockChainService.getBtcPrice();
    this.marketcap = this.blockChainService.getMarketcap();
    this.volumeBTC = this.blockChainService.totalBTC().pipe(map(x => x / 100000000));

    this.difficulty = this.blockChainService.getdifficulty();
    this.latestHash = this.blockChainService.getlatesthash();
    this.transactionCount = this.blockChainService.transactioncount();
    this.csent = this.blockChainService.hrbtcsent();

  }

  filterWaehrung(waehrung: any) {
    this.key = waehrung;
  }


}


