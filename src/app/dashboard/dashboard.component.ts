import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BlockchainService} from '../core/blockchain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  btcInformation: Observable<any[]> | undefined;
  btc: any;
  key: any;
  values: any;

  waehrungen = [
    'USD',
    'AUD',
    'RUB',
    'ARS',
    'CHF',
  ]

  constructor(private blockChainService: BlockchainService) {}

  ngOnInit(): void {
    this.blockChainService.getBtcPrice()
      // .pipe(map(response => this.values = response), tap(x => console.log(x)))
      .subscribe(
        data => this.btc = data,
        error => console.log(error)
      );
  }

  filterWaehrung(waehrung: any) {
    this.key = waehrung;
  }


}


