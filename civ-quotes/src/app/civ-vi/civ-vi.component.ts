import { Component } from '@angular/core';
import { TechQuote } from './civ-vi-quotes';

@Component({
  selector: 'app-civ-vi',
  templateUrl: './civ-vi.component.html',
  styleUrls: ['./civ-vi.component.css']
})
export class CivViComponent {
  aTechQuotes = new Array<TechQuote>();
  cTechQuotes = new Array<TechQuote>();
  mTechQuotes = new Array<TechQuote>();
  rTechQuotes = new Array<TechQuote>();
  iTechQuotes = new Array<TechQuote>();
  moTechQuotes = new Array<TechQuote>();
  atTechQuotes = new Array<TechQuote>();
  ifTechQuotes = new Array<TechQuote>();
  fTechQuotes = new Array<TechQuote>();


  constructor() {
    const allTechQuotes = require('./civ-vi-tech-quotes.json').quotes as Array<TechQuote>;
    this.aTechQuotes = allTechQuotes.filter(quote => quote.era === "a");
    this.cTechQuotes = allTechQuotes.filter(quote => quote.era === "c");
    this.mTechQuotes = allTechQuotes.filter(quote => quote.era === "m");
    this.rTechQuotes = allTechQuotes.filter(quote => quote.era === "r");
    this.iTechQuotes = allTechQuotes.filter(quote => quote.era === "i");
    this.moTechQuotes = allTechQuotes.filter(quote => quote.era === "mo");
    this.atTechQuotes = allTechQuotes.filter(quote => quote.era === "at");
    this.ifTechQuotes = allTechQuotes.filter(quote => quote.era === "if");
    this.fTechQuotes = allTechQuotes.filter(quote => quote.era === "f");
  }
}
