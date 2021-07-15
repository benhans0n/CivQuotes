import { Component } from '@angular/core';
import { EraQuote, TechQuote, WonderQuote } from './civ-v-quotes';

@Component({
  selector: 'app-civ-v',
  templateUrl: './civ-v.component.html',
  styleUrls: ['./civ-v.component.css']
})
export class CivVComponent {
  aTechQuotes = new Array<TechQuote>();
  cTechQuotes = new Array<TechQuote>();
  mTechQuotes = new Array<TechQuote>();
  rTechQuotes = new Array<TechQuote>();
  iTechQuotes = new Array<TechQuote>();
  moTechQuotes = new Array<TechQuote>();
  atTechQuotes = new Array<TechQuote>();
  ifTechQuotes = new Array<TechQuote>();

  aWonderQuotes = new Array<WonderQuote>();
  cWonderQuotes = new Array<WonderQuote>();
  mWonderQuotes = new Array<WonderQuote>();
  rWonderQuotes = new Array<WonderQuote>();
  iWonderQuotes = new Array<WonderQuote>();
  moWonderQuotes = new Array<WonderQuote>();
  atWonderQuotes = new Array<WonderQuote>();
  ifWonderQuotes = new Array<WonderQuote>();

  cEraQuotes = new Array<EraQuote>();
  mEraQuotes = new Array<EraQuote>();
  rEraQuotes = new Array<EraQuote>();
  iEraQuotes = new Array<EraQuote>();
  moEraQuotes = new Array<EraQuote>();
  fEraQuotes = new Array<EraQuote>();

  constructor() {
    const allTechQuotes = require('./civ-v-tech-quotes.json').quotes as Array<TechQuote>;
    this.aTechQuotes = allTechQuotes.filter(quote => quote.era === "a");
    this.cTechQuotes = allTechQuotes.filter(quote => quote.era === "c");
    this.mTechQuotes = allTechQuotes.filter(quote => quote.era === "m");
    this.rTechQuotes = allTechQuotes.filter(quote => quote.era === "r");
    this.iTechQuotes = allTechQuotes.filter(quote => quote.era === "i");
    this.moTechQuotes = allTechQuotes.filter(quote => quote.era === "mo");
    this.atTechQuotes = allTechQuotes.filter(quote => quote.era === "at");
    this.ifTechQuotes = allTechQuotes.filter(quote => quote.era === "if");

    const allWonderQuotes = require('./civ-v-wonder-quotes.json').quotes as Array<WonderQuote>;
    this.aWonderQuotes = allWonderQuotes.filter(quote => quote.era === "a");
    this.cWonderQuotes = allWonderQuotes.filter(quote => quote.era === "c");
    this.mWonderQuotes = allWonderQuotes.filter(quote => quote.era === "m");
    this.rWonderQuotes = allWonderQuotes.filter(quote => quote.era === "r");
    this.iWonderQuotes = allWonderQuotes.filter(quote => quote.era === "i");
    this.moWonderQuotes = allWonderQuotes.filter(quote => quote.era === "mo");
    this.atWonderQuotes = allWonderQuotes.filter(quote => quote.era === "at");
    this.ifWonderQuotes = allWonderQuotes.filter(quote => quote.era === "if");

    const allEraQuotes = require('./civ-v-era-quotes.json').quotes as Array<EraQuote>;
    this.cEraQuotes = allEraQuotes.filter(quote => quote.era === "c");
    this.mEraQuotes = allEraQuotes.filter(quote => quote.era === "m");
    this.rEraQuotes = allEraQuotes.filter(quote => quote.era === "r");
    this.iEraQuotes = allEraQuotes.filter(quote => quote.era === "i");
    this.moEraQuotes = allEraQuotes.filter(quote => quote.era === "mo");
    this.fEraQuotes = allEraQuotes.filter(quote => quote.era === "f");
  }
}