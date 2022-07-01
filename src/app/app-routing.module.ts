import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { BtcConverterComponent } from './btc-converter/btc-converter.component';
import { BtcDiagrammComponent } from './btc-diagramm/btc-diagramm.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'btc-diagramm',
    component: BtcDiagrammComponent,
  },
  {
    path: 'btc-converter',
    component: BtcConverterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    enableTracing: !environment.production,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
