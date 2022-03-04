import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/app/models/broker.model';
import { BrokerService } from 'src/app/services/broker.service';

@Component({
  selector: 'app-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.css']
})
export class BrokersListComponent implements OnInit {
  brokers?: Broker[];
  currentBroker: Broker = {};
  currentIndex = -1;
  name = '';
  constructor(private brokerService: BrokerService) { }

  ngOnInit(): void {
    this.retrieveBrokers();
  }
  retrieveBrokers(): void {
    this.brokerService.getAll()
      .subscribe({
        next: (data) => {
          this.brokers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveBrokers();
    this.currentBroker = {};
    this.currentIndex = -1;
  }
  setActiveBroker(broker: Broker, index: number): void {
    this.currentBroker = broker;
    this.currentIndex = index;
  }
  searchName(): void {
    this.currentBroker = {};
    this.currentIndex = -1;
    this.brokerService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.brokers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
