import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBrokerComponent } from './components/add-broker/add-broker.component';
import { BrokerDetailsComponent } from './components/broker-details/broker-details.component';
import { BrokersListComponent } from './components/brokers-list/brokers-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddTickerComponent } from './components/add-ticker/add-ticker.component';
import { TickerDetailsComponent } from './components/ticker-details/ticker-details.component';
import { TickersListComponent } from './components/tickers-list/tickers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBrokerComponent,
    BrokerDetailsComponent,
    BrokersListComponent,
    AddTickerComponent,
    TickerDetailsComponent,
    TickersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
