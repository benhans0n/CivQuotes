export class TechQuote {
    tech: string;
    num: number;
    era: string;
    quotes: Quote[];

    constructor(tech:string, num:number, era: string, quotes:Quote[]) {
        this.tech = tech;
        this.num = num;
        this.era = era;
        this.quotes = quotes;
    }
}

class Quote {
    quote: string;
    speaker: string;

    constructor(quote:string, speaker:string) {
        this.quote = quote;
        this.speaker = speaker;
    }
}