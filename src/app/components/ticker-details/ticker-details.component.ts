import { Component, Input, OnInit } from '@angular/core';
import { TickerService } from 'src/app/services/ticker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticker } from 'src/app/models/ticker.model';
import { TickerType } from 'src/app/models/ticker-type.enum';
import { Currency } from 'src/app/models/currency.enum';

@Component({
    selector: 'app-ticker-details',
    templateUrl: './ticker-details.component.html',
    styleUrls: ['./ticker-details.component.css']
})
export class TickerDetailsComponent implements OnInit {
    @Input() viewMode = false;
    @Input() currentTicker: Ticker = {
        tickerId: '',
        shortId: '',
        tickerType: TickerType.ETF,
        isin: '',
        name: '',
        exchange: '',
        currency: Currency.EUR
    };
    message = '';
    eTickerType = TickerType
    eCurrency = Currency
    constructor(
        private tickerService: TickerService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit(): void {
        if (!this.viewMode) {
            this.message = '';
            this.getTicker(this.route.snapshot.params["id"]);
        }
    }
    getTicker(id: string): void {
        this.tickerService.get(id)
            .subscribe({
                next: (data) => {
                    this.currentTicker = data;
                    console.log(data);
                },
                error: (e) => console.error(e)
            });
    }
    updateTicker(): void {
        this.message = '';
        this.tickerService.update(this.currentTicker)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.message = 'This Ticker was updated successfully!';
                },
                error: (e) => console.error(e)
            });
    }
    deleteTicker(): void {
        if(this.currentTicker.tickerId != undefined)
        {
            this.tickerService.delete(this.currentTicker.tickerId)
                .subscribe({
                    next: (res) => {
                        console.log(res);
                        this.router.navigate(['/tutorials']);
                    },
                    error: (e) => console.error(e)
                });
        }
        else
        {
            throw "Invalid ticker"
        }
    }

}
