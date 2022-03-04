import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBrokerComponent } from './components/add-broker/add-broker.component';
import { BrokerDetailsComponent } from './components/broker-details/broker-details.component';
import { BrokersListComponent } from './components/brokers-list/brokers-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddBrokerComponent,
    BrokerDetailsComponent,
    BrokersListComponent
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
