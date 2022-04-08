import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersListComponent } from './components/brokers-list/brokers-list.component';
import { BrokerDetailsComponent } from './components/broker-details/broker-details.component';
import { AddBrokerComponent } from './components/add-broker/add-broker.component';
import { TickersListComponent } from './components/tickers-list/tickers-list.component';
import { TickerDetailsComponent } from './components/ticker-details/ticker-details.component';
import { AddTickerComponent } from './components/add-ticker/add-ticker.component';

const routes: Routes = [
  { path: '', redirectTo: 'brokers', pathMatch: 'full' },
  { path: 'brokers', component: BrokersListComponent },
  { path: 'brokers/add', component: AddBrokerComponent },
  { path: 'brokers/:id', component: BrokerDetailsComponent },
  { path: 'tickers', component: TickersListComponent },
  { path: 'tickers/add', component: AddTickerComponent },
  { path: 'tickers/:id', component: TickerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
