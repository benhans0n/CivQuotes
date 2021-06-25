import { Component, OnInit } from '@angular/core';
import { TechQuote } from './civv-tech-quote';

@Component({
  selector: 'app-civ-v',
  templateUrl: './civ-v.component.html',
  styleUrls: ['./civ-v.component.css']
})
export class CivVComponent implements OnInit {
  aQuotes = new Array<TechQuote>();
  cQuotes = new Array<TechQuote>();
  mQuotes = new Array<TechQuote>();
  rQuotes = new Array<TechQuote>();
  iQuotes = new Array<TechQuote>();
  moQuotes = new Array<TechQuote>();
  atQuotes = new Array<TechQuote>();
  ifQuotes = new Array<TechQuote>();

  constructor() {
    let holdTechQuotes = new Array<TechQuote>();
    holdTechQuotes = require('./civ-v-tech-quotes.json').quotes;

    this.aQuotes = holdTechQuotes.filter(quote => quote.era === "a");
    this.cQuotes = holdTechQuotes.filter(quote => quote.era === "c");
    this.mQuotes = holdTechQuotes.filter(quote => quote.era === "m");
    this.rQuotes = holdTechQuotes.filter(quote => quote.era === "r");
    this.iQuotes = holdTechQuotes.filter(quote => quote.era === "i");
    this.moQuotes = holdTechQuotes.filter(quote => quote.era === "mo");
    this.atQuotes = holdTechQuotes.filter(quote => quote.era === "at");
    this.ifQuotes = holdTechQuotes.filter(quote => quote.era === "if");
   }

  ngOnInit(): void {
  }
}
