import { TickerType } from 'src/app/models/ticker-type.enum';
import { Currency } from 'src/app/models/currency.enum';

export class Ticker {
    tickerId?: string;
    shortId?: string;
    tickerType?: TickerType;
    isin?: string;
    name?: string;
    exchange?: string;
    currency?: Currency;
}
