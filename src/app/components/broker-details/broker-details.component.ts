import { Component, Input, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/services/broker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Broker } from 'src/app/models/broker.model';
import { FileImporter } from 'src/app/models/file-importer.enum';

@Component({
  selector: 'app-broker-details',
  templateUrl: './broker-details.component.html',
  styleUrls: ['./broker-details.component.css']
})
export class BrokerDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentBroker: Broker = {
    brokerId: '',
    name: '',
    country: '',
    fileImporter: FileImporter.Degiro
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
  updateBroker(): void {
    this.message = '';
    this.brokerService.update(this.currentBroker)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This Broker was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteBroker(): void {
    if(this.currentBroker.brokerId != undefined)
    {
      this.brokerService.delete(this.currentBroker.brokerId)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/tutorials']);
          },
          error: (e) => console.error(e)
        });
    }
    else
      throw "Invalid Broker"
  }
}
