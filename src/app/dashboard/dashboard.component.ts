import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlockchainService} from '../core/service/blockchain.service';
import {map} from "rxjs/operators";

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
      .subscribe(
        data => this.btc = data,
        error => console.log(error)
      );

    this.priceArray = this.blockChainService.getBTCChartPriceData().pipe(map(x => x.values), map(koordinaten => {
      let chartItem = koordinaten.map((item: any) => {
        var chartDate = new Date(item.x);
        return {'name': 'btc', value: [chartDate, item.y]};
      });
      return chartItem;
    }));

    this.circulatingBTC = this.blockChainService.getTotalCirculatingBTC().pipe(map(x => x.values), map(koordinaten => {
      let chartItem = koordinaten.map((item: any) => {
        var chartDate = new Date(item.x);
        return {'name': 'btc', value: [chartDate, item.y]};
      });
      return chartItem;
    }));

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


