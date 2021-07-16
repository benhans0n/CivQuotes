export class TechQuote {
    tech: string;
    faction: string;
    quote: string;
    speaker: string;
    work: string;

    constructor(tech: string, faction: string, quote: string, speaker: string, work: string) {
        this.tech = tech;
        this.faction = faction;
        this.quote = quote;
        this.speaker = speaker;
        this.work = work;
    }
}

export class WonderQuote {
    wonder: string;
    quote: string;
    speaker: string;
    work: string;

    constructor(wonder: string, faction: string, quote: string, speaker: string, work: string) {
        this.wonder = wonder;
        this.quote = quote;
        this.speaker = speaker;
        this.work = work;
    }
}

export class AffinityQuote {
    affinity: string;
    level: string;
    quote: string;
    speaker: string;
    work: string;

    constructor(affinity: string, level: string, quote: string, speaker: string, work: string) {
        this.affinity = affinity;
        this.level = level;
        this.quote = quote;
        this.speaker = speaker;
        this.work = work;
    }
}