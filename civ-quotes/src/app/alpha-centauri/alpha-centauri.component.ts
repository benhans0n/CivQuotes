import { Component } from '@angular/core';
import { Quote } from './ac-quote';

@Component({
  selector: 'app-alpha-centauri',
  templateUrl: './alpha-centauri.component.html',
  styleUrls: ['./alpha-centauri.component.css']
})
export class AlphaCentauriComponent {

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
    const allQuotes = require('./ac-quotes.json').quotes as Array<Quote>;
    this.uopQuotes = allQuotes.filter(quote => quote.faction === "uop");
    this.lbQuotes = allQuotes.filter(quote => quote.faction === "lb");
    this.sfQuotes = allQuotes.filter(quote => quote.faction === "sf");
    this.pfQuotes = allQuotes.filter(quote => quote.faction === "pf");
    this.hhQuotes = allQuotes.filter(quote => quote.faction === "hh");
    this.miQuotes = allQuotes.filter(quote => quote.faction === "mi");
    this.gsQuotes = allQuotes.filter(quote => quote.faction === "gs");
    this.ccQuotes = allQuotes.filter(quote => quote.faction === "cc");
    this.npQuotes = allQuotes.filter(quote => quote.faction === "np");
    this.fdQuotes = allQuotes.filter(quote => quote.faction === "fd");
    this.daQuotes = allQuotes.filter(quote => quote.faction === "da");
    this.cpQuotes = allQuotes.filter(quote => quote.faction === "cp");
    this.mcQuotes = allQuotes.filter(quote => quote.faction === "mc");
    this.muQuotes = allQuotes.filter(quote => quote.faction === "mu");
    this.otherQuotes = allQuotes.filter(quote => quote.faction === "other");
  }
}