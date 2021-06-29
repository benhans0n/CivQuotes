import { Component, OnInit } from '@angular/core';
import { Quote } from './civ-iv-quote';

@Component({
  selector: 'app-civ-iv',
  templateUrl: './civ-iv.component.html',
  styleUrls: ['./civ-iv.component.css']
})
export class CivIvComponent implements OnInit {
  aQuotes = new Array<Quote>();
  cQuotes = new Array<Quote>();
  mQuotes = new Array<Quote>();
  rQuotes = new Array<Quote>();
  iQuotes = new Array<Quote>();
  moQuotes = new Array<Quote>();

  constructor() {
    const allQuotes = require('./civ-iv-quotes.json').quotes as Array<Quote>;

    this.aQuotes = allQuotes.filter(quote => quote.era === "a");
    this.cQuotes = allQuotes.filter(quote => quote.era === "c");
    this.mQuotes = allQuotes.filter(quote => quote.era === "m");
    this.rQuotes = allQuotes.filter(quote => quote.era === "r");
    this.iQuotes = allQuotes.filter(quote => quote.era === "i");
    this.moQuotes = allQuotes.filter(quote => quote.era === "mo");
   }

  ngOnInit(): void {
  }

}
