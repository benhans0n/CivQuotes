import { Component, OnInit } from '@angular/core';
import { Quote } from './civivquote';

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
    let holdQuotes = new Array<Quote>();
    holdQuotes = require('./civ-iv-quotes.json').quotes;

    this.aQuotes = holdQuotes.filter(quote => quote.era === "a");
    this.cQuotes = holdQuotes.filter(quote => quote.era === "c");
    this.mQuotes = holdQuotes.filter(quote => quote.era === "m");
    this.rQuotes = holdQuotes.filter(quote => quote.era === "r");
    this.iQuotes = holdQuotes.filter(quote => quote.era === "i");
    this.moQuotes = holdQuotes.filter(quote => quote.era === "mo");
   }

  ngOnInit(): void {
  }

}
