import { Component, OnInit } from '@angular/core';
import { Broker } from 'src/app/models/broker.model';
import { FileImporter } from 'src/app/models/file-importer.enum';
import { BrokerService } from 'src/app/services/broker.service';
@Component({
  selector: 'app-add-broker',
  templateUrl: './add-broker.component.html',
  styleUrls: ['./add-broker.component.css']
})
export class AddBrokerComponent implements OnInit {
  broker: Broker = {
    brokerId: '',
    name: '',
    country: '',
    fileImporter: FileImporter.Degiro
  };
  eFileImporter = FileImporter;
  submitted = false;
  constructor(private brokerService: BrokerService) { }

  ngOnInit(): void {
  }

  saveBroker(): void {
    const data = {
      name: this.broker.name,
    };
    this.brokerService.add(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newBroker(): void {
    this.submitted = false;
    this.broker = {
      brokerId: '',
      name: '',
      country: '',
      fileImporter: FileImporter.Degiro
    };
  }
}
