import { Component, Input, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/services/broker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Broker } from 'src/app/models/broker.model';

@Component({
  selector: 'app-broker-details',
  templateUrl: './broker-details.component.html',
  styleUrls: ['./broker-details.component.css']
})
export class BrokerDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentBroker: Broker = {
    name: ''
  };
  message = '';
  constructor(
    private brokerService: BrokerService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getBroker(this.route.snapshot.params["id"]);
      }
    }
    getBroker(id: string): void {
      this.brokerService.get(id)
        .subscribe({
          next: (data) => {
            this.currentBroker = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
    updatePublished(status: boolean): void {
      const data = {
        name: this.currentBroker.name,
      };
      this.message = '';
      this.brokerService.update(this.currentBroker.brokerId, data)
        .subscribe({
          next: (res) => {
            console.log(res);
            //this.currentBroker.published = status;
            this.message = res.message ? res.message : 'The status was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
    updateTutorial(): void {
      this.message = '';
      this.brokerService.update(this.currentBroker.brokerId, this.currentBroker)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
    deleteTutorial(): void {
      this.brokerService.delete(this.currentBroker.brokerId)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/tutorials']);
          },
          error: (e) => console.error(e)
        });
    }
}
