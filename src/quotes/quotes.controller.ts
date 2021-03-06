import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
//import { Quote } from './interfaces/quote.interface';
import { ApiTags } from '@nestjs/swagger'

@ApiTags ('quotes')
@Controller('quotes')
export class QuotesController {

    constructor(private quotesService: QuotesService){}

    @Get()
        getQuotes(): string {
            return this.quotesService.getQuotes();
        }

    @Post()
        createQuote(@Body() createQuoteDto: CreateQuoteDto ): any {
            return this.quotesService.createQuote(createQuoteDto);
        }
}
