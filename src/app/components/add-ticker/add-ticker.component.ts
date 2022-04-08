import { Component, OnInit } from '@angular/core';
import { Ticker } from 'src/app/models/ticker.model';
import { TickerType } from 'src/app/models/ticker-type.enum';
import { Currency } from 'src/app/models/currency.enum';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-add-ticker',
  templateUrl: './add-ticker.component.html',
  styleUrls: ['./add-ticker.component.css']
})
export class AddTickerComponent implements OnInit {
  eTickerType = TickerType;
  eCurrency = Currency;
  ticker: Ticker = {
    tickerId: '',
    shortId: '',
    tickerType: TickerType.ETF,
    isin: '',
    name: '',
    exchange: '',
    currency: Currency.EUR
  };
  submitted = false;
  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
  }
  saveTicker(): void {
    const data = {
      tickerId: this.ticker.tickerId,
      shortId: this.ticker.shortId,
      tickerType: this.ticker.tickerType,
      isin: this.ticker.isin,
      name: this.ticker.name,
      exchange: this.ticker.exchange,
      currency: this.ticker.currency
    };
    this.tickerService.add(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTicker(): void {
    this.submitted = false;
    this.ticker = {
      tickerId: '',
      shortId: '',
      tickerType: TickerType.ETF,
      isin: '',
      name: '',
      exchange: '',
      currency: Currency.EUR
    };
  }
}
