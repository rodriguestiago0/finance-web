import { Component, OnInit } from '@angular/core';
import { Ticker } from 'src/app/models/ticker.model';
import { TickerType } from 'src/app/models/ticker-type.enum';
import { Currency } from 'src/app/models/currency.enum';
import { TickerService } from 'src/app/services/ticker.service';

@Component({
  selector: 'app-tickers-list',
  templateUrl: './tickers-list.component.html',
  styleUrls: ['./tickers-list.component.css']
})
export class TickersListComponent implements OnInit {
  tickers?: Ticker[];
  currentTicker: Ticker = {};
  currentIndex = -1;
  name = ''
  constructor(private tickerService: TickerService) { }

  ngOnInit(): void {
    this.retrieveTickers();
  }
  retrieveTickers(): void {
    this.tickerService.getList()
      .subscribe({
        next: (data) => {
          this.tickers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveTickers();
    this.currentTicker = {};
    this.currentIndex = -1;
  }

  setActiveTicker(ticker: Ticker, index: number): void {
    this.currentTicker = ticker;
    this.currentIndex = index;
  }

  search(): void {
    this.currentTicker = {};
    this.currentIndex = -1;
    this.tickerService.getList(1, 10, [["name", this.name]])
      .subscribe({
        next: (data) => {
          this.tickers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
