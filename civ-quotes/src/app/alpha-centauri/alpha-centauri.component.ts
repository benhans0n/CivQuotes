import { Component, OnInit } from '@angular/core';
import { Quote } from './acquote';

@Component({
  selector: 'app-alpha-centauri',
  templateUrl: './alpha-centauri.component.html',
  styleUrls: ['./alpha-centauri.component.css']
})
export class AlphaCentauriComponent implements OnInit {
  
  uopQuotes = new Array<Quote>();
  lbQuotes = new Array<Quote>();
  sfQuotes = new Array<Quote>();
  pfQuotes = new Array<Quote>();
  hhQuotes = new Array<Quote>();
  miQuotes = new Array<Quote>();
  gsQuotes = new Array<Quote>();
  ccQuotes = new Array<Quote>();
  npQuotes = new Array<Quote>();
  fdQuotes = new Array<Quote>();
  daQuotes = new Array<Quote>();
  cpQuotes = new Array<Quote>();
  mcQuotes = new Array<Quote>();
  muQuotes = new Array<Quote>();
  otherQuotes = new Array<Quote>();

  constructor() { 
    let holdQuotes = new Array<Quote>();
    holdQuotes = require('./ac-quotes.json').quotes;

    this.uopQuotes = holdQuotes.filter(quote => quote.faction === "uop");
    this.lbQuotes = holdQuotes.filter(quote => quote.faction === "lb");
    this.sfQuotes = holdQuotes.filter(quote => quote.faction === "sf");
    this.pfQuotes = holdQuotes.filter(quote => quote.faction === "pf");
    this.hhQuotes = holdQuotes.filter(quote => quote.faction === "hh");
    this.miQuotes = holdQuotes.filter(quote => quote.faction === "mi");
    this.gsQuotes = holdQuotes.filter(quote => quote.faction === "gs");
    this.ccQuotes = holdQuotes.filter(quote => quote.faction === "cc");
    this.npQuotes = holdQuotes.filter(quote => quote.faction === "np");
    this.fdQuotes = holdQuotes.filter(quote => quote.faction === "fd");
    this.daQuotes = holdQuotes.filter(quote => quote.faction === "da");
    this.cpQuotes = holdQuotes.filter(quote => quote.faction === "cp");
    this.mcQuotes = holdQuotes.filter(quote => quote.faction === "mc");
    this.muQuotes = holdQuotes.filter(quote => quote.faction === "mu");
    this.otherQuotes = holdQuotes.filter(quote => quote.faction === "other");
  }

  ngOnInit(): void {
  }
}



