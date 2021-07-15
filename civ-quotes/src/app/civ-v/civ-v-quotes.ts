export class TechQuote {
    tech: string;
    era: string;
    quote: string;
    speaker: string;

    constructor(tech:string, era: string, quote:string, speaker:string) {
        this.tech = tech;
        this.era = era;
        this.quote = quote;
        this.speaker = speaker;
    }
}

export class WonderQuote {
    wonder: string;
    era: string;
    quote: string;
    speaker: string;

    constructor(wonder:string, era:string, quote:string, speaker:string) {
        this.wonder = wonder;
        this.era = era;
        this.quote = quote;
        this.speaker = speaker;
    }
}

export class EraQuote {
    era: string;
    quote: string;
    speaker: string;

    constructor(era:string, quote:string, speaker:string) {
        this.era = era;
        this.quote = quote;
        this.speaker = speaker;
    }
}