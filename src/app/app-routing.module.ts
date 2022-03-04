import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokersListComponent } from './components/brokers-list/brokers-list.component';
import { BrokerDetailsComponent } from './components/broker-details/broker-details.component';
import { AddBrokerComponent } from './components/add-broker/add-broker.component';

const routes: Routes = [
  { path: '', redirectTo: 'brokers', pathMatch: 'full' },
  { path: 'brokers', component: BrokersListComponent },
  { path: 'brokers/:id', component: BrokerDetailsComponent },
  { path: 'add', component: AddBrokerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
