import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BlockchainService} from "../core/service/blockchain.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-btc-diagramm',
  templateUrl: './btc-diagramm.component.html',
  styleUrls: ['./btc-diagramm.component.scss']
})
export class BtcDiagrammComponent implements OnInit {

  chartArray: Observable<any> | undefined;
  priceArray: Observable<any> | undefined;

  constructor(private blockChainService: BlockchainService) {
  }

  ngOnInit(): void {
    this.getBtcChartPriceData();
    this.getBTCChartsData();
  }


  private getBTCChartsData() {
    this.chartArray = this.blockChainService.getBTCChartsdata().pipe(map(x => x.values), map(koordinaten => {
      let chartItem = koordinaten.map((item: any) => {
        var chartDate = new Date(item.x);
        return {'name': 'btc', value: [chartDate, item.y]};
      });
      return chartItem;
    }));
  }

  private getBtcChartPriceData() {
    this.priceArray = this.blockChainService.getBTCChartPriceData().pipe(map(x => x.values), map(koordinaten => {
      let chartItem = koordinaten.map((item: any) => {
        var chartDate = new Date(item.x);
        return {'name': 'btc', value: [chartDate, item.y]};
      });
      return chartItem;
    }));
  }

}
