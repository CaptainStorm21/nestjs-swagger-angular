import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/quote.interface';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuotesService {

    getQuotes(): string {
        return 'This will be our quotes update';
    }

    createQuote(quote:  Quote ) {
        return `${quote.author} + ${quote.title} `
    }
}
