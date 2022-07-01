import {Component, OnInit} from '@angular/core';
import {BlockchainService} from "../core/service/blockchain.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-btc-converter',
  templateUrl: './btc-converter.component.html',
  styleUrls: ['./btc-converter.component.scss']
})
export class BtcConverterComponent implements OnInit {

  btc: Observable<any> | undefined;
  priceArray: Observable<string> | undefined;
  calcResult: Observable<string> | undefined;
  marketcap: Observable<string> | undefined;
  volumeBTC: Observable<number> | undefined;

  waehrung: string | undefined;
  betrag: number = 0;

  waehrungen = [
    'EUR',
    'USD',
    'AUD',
    'NZD',
    'GBP',
  ]

  constructor(private blockChainService: BlockchainService) {
  }

  ngOnInit(): void {
    this.btc = this.blockChainService.getBtcPrice();
    this.marketcap = this.blockChainService.getMarketcap();
    this.volumeBTC = this.blockChainService.totalBTC();

    this.priceArray = this.blockChainService.getBTCChartPriceData()
      .pipe(
        map(x => x.values),
        map(koordinaten => {
          let chartItem = koordinaten.map((item: any) => {
            var chartDate = new Date(item.x);
            return {'name': 'btc', value: [chartDate, item.y]};
          });
          return chartItem;
        }));
  }

  public waehrungAuswaehlen(waehrung: string) {
    this.waehrung = waehrung;
  }

  public calcBTCConvertion(betrag: number) {
    this.calcResult = this.blockChainService.convertSymbolAndValueIntoBTC(this.waehrung, betrag);
  }

  public reset() {
    this.waehrung = "";
    this.betrag = 0;
    this.calcResult = undefined;
  }
}
