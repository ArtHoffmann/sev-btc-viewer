import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BlockchainService} from "../core/blockchain.service";

@Component({
  selector: 'app-btc-details',
  templateUrl: './btc-details.component.html',
  styleUrls: ['./btc-details.component.scss']
})
export class BtcDetailsComponent implements OnInit {

  btc: any;
  btcPrice: any | undefined;
  marketcap: any | undefined;
  volumeBTC: any | undefined;

  values?: any;
  key: any;

  constructor(private blockChainService: BlockchainService) {
  }

  ngOnInit(): void {
    this.btcPrice = this.blockChainService.getBtcPrice();
    this.marketcap = this.blockChainService.getMarketcap();
    this.volumeBTC = this.blockChainService.totalBTC();
  }

  filterWaehrung(waehrung: any) {
    this.key = waehrung;
  }
}
