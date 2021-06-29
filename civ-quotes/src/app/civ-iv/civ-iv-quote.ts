export class Quote {
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