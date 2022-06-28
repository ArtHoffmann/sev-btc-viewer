import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';

import {CovalentLayoutModule} from '@covalent/core/layout';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentLoadingModule} from '@covalent/core/loading';
import {CovalentSearchModule} from '@covalent/core/search';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BtcConverterComponent} from './btc-converter/btc-converter.component';
import {BtcDiagrammComponent} from './btc-diagramm/btc-diagramm.component';
import {MyCoinsComponent} from './my-coins/my-coins.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";
import {CovalentBaseEchartsModule} from "@covalent/echarts/base";
import {CovalentBarEchartsModule} from "@covalent/echarts/bar";
import {CovalentTooltipEchartsModule} from "@covalent/echarts/tooltip";
import { NumberSuffixPipe } from './number-suffix.pipe';
import {CovalentLineEchartsModule} from "@covalent/echarts/line";
import 'echarts/lib/chart/line';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BtcConverterComponent,
    BtcDiagrammComponent,
    MyCoinsComponent,
    NumberSuffixPipe
  ],
  imports: [
    BrowserModule,
    CovalentLineEchartsModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentLayoutModule,
    CovalentMarkdownModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentDialogsModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
