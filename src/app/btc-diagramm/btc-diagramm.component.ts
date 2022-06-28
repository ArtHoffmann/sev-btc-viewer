import { Component, OnInit } from '@angular/core';
import * as echarts from '@covalent/echarts';
import {Observable} from "rxjs";
import {BlockchainService} from "../core/blockchain.service";

@Component({
  selector: 'app-btc-diagramm',
  templateUrl: './btc-diagramm.component.html',
  styleUrls: ['./btc-diagramm.component.scss']
})
export class BtcDiagrammComponent implements OnInit {

  btcChartData: Observable<any> | undefined;

  constructor(private blockChainService: BlockchainService) { }

  ngOnInit(): void {
    this.btcChartData = this.blockChainService.getBTCChartsdata();
  }

}
