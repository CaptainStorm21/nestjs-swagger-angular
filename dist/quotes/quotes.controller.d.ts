import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getQuotes(): string;
    createQuote(createQuoteDto: CreateQuoteDto): any;
}
