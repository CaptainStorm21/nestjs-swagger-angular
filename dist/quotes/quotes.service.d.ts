import { Quote } from './interfaces/quote.interface';
export declare class QuotesService {
    getQuotes(): string;
    createQuote(quote: Quote): string;
}
