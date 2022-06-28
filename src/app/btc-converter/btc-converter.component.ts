import {Component, OnInit} from '@angular/core';
import {BlockchainService} from "../core/blockchain.service";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-btc-converter',
  templateUrl: './btc-converter.component.html',
  styleUrls: ['./btc-converter.component.scss']
})
export class BtcConverterComponent implements OnInit {


  waehrungen = [
    'EUR',
    'USD',
    'AUD',
    'NZD',
    'GBP',
  ]
  btc: Observable<any> | undefined;
  priceArray: Observable<any> | undefined;

  waehrung: any;
  erg: any | undefined;
  betrag: any;
  disabled: boolean = true;
  marketcap: any;
  volumeBTC: any;


  constructor(private blockChainService: BlockchainService) {
  }

  ngOnInit(): void {
    this.btc = this.blockChainService.getBtcPrice();
    this.marketcap = this.blockChainService.getMarketcap();
    this.volumeBTC = this.blockChainService.totalBTC();

    this.priceArray = this.blockChainService.getBTCChartPriceData().pipe(map(x => x.values), map(koordinaten => {
      let items = koordinaten.map((item: any) => {
        var a = new Date(item.x);
        console.log(a);
        return {'name': 'btc', value: [a, item.y]};
      });
      return items;
    })).pipe(tap(x => console.log(x)));
  }

  waehrungAuswaehlen(w: string) {
    this.waehrung = w;
  }

  calcResult(betrag: number) {
    console.log(this.waehrung)
    this.erg = this.blockChainService.convertSymbolAndValueIntoBTC(this.waehrung, betrag);
  }

  reset() {
    this.waehrung = "";
    this.betrag = 0;
    this.erg = undefined;
  }
}
