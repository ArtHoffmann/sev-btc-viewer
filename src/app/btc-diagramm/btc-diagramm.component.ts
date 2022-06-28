import {Component, OnInit} from '@angular/core';
import * as echarts from '@covalent/echarts';
import {Observable} from "rxjs";
import {BlockchainService} from "../core/blockchain.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-btc-diagramm',
  templateUrl: './btc-diagramm.component.html',
  styleUrls: ['./btc-diagramm.component.scss']
})
export class BtcDiagrammComponent implements OnInit {

  chartArray: Observable<any> | undefined;
  priceArray: Observable<any> | undefined;

  constructor(private blockChainService: BlockchainService) {}

  ngOnInit(): void {
    this.chartArray = this.blockChainService.getBTCChartsdata().pipe(map(x => x.values), map(koordinaten => {
      let items = koordinaten.map((item: any) => {
        var a = new Date(item.x);
        console.log(a);
        return {'name': 'btc', value: [a, item.y]};
      });
      return items;
    })).pipe(tap(x => console.log(x)));


    this.priceArray = this.blockChainService.getBTCChartPriceData().pipe(map(x => x.values), map(koordinaten => {
      let items = koordinaten.map((item: any) => {
        var a = new Date(item.x);
        console.log(a);
        return {'name': 'btc', value: [a, item.y]};
      });
      return items;
    })).pipe(tap(x => console.log(x)));
  }

}
