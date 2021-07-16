export class Quote {
    faction: string;
    quote: string;
    speaker: string;
    work: string;
    flavor_text: string;

    constructor(faction: string, quote: string, speaker: string, work: string, flavor_text: string) {
        this.faction = faction;
        this.quote = quote;
        this.speaker = speaker;
        this.work = work;
        this.flavor_text = flavor_text;
    }
}