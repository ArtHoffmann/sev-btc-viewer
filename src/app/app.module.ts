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
import {CovalentDataTableModule} from '@covalent/core/data-table';
import {CovalentDialogsModule} from '@covalent/core/dialogs';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BtcConverterComponent} from './btc-converter/btc-converter.component';
import {BtcDiagrammComponent} from './btc-diagramm/btc-diagramm.component';
import {MyCoinsComponent} from './my-coins/my-coins.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BtcConverterComponent,
    BtcDiagrammComponent,
    MyCoinsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentMarkdownModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
