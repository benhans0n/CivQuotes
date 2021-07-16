import { Component } from '@angular/core';
import { TechQuote, WonderQuote } from './civ-be-quotes';

@Component({
  selector: 'app-civ-be',
  templateUrl: './civ-be.component.html',
  styleUrls: ['./civ-be.component.css']
})
export class CivBeComponent {
  arcQuotes = new Array<TechQuote>();
  braQuotes = new Array<TechQuote>();
  fiuQuotes = new Array<TechQuote>();
  kvpQuotes = new Array<TechQuote>();
  pacQuotes = new Array<TechQuote>();
  pauQuotes = new Array<TechQuote>();
  plyQuotes = new Array<TechQuote>();
  slaQuotes = new Array<TechQuote>();
  otherQuotes = new Array<TechQuote>();
  wonderQuotes = new Array<WonderQuote>();

  constructor() {
    const allTechQuotes = require('./civ-be-tech-quotes.json').quotes as Array<TechQuote>;
    this.arcQuotes = allTechQuotes.filter(quote => quote.faction === "arc");
    this.braQuotes = allTechQuotes.filter(quote => quote.faction === "bra");
    this.fiuQuotes = allTechQuotes.filter(quote => quote.faction === "fiu");
    this.kvpQuotes = allTechQuotes.filter(quote => quote.faction === "kvp");
    this.pacQuotes = allTechQuotes.filter(quote => quote.faction === "pac");
    this.pauQuotes = allTechQuotes.filter(quote => quote.faction === "pau");
    this.plyQuotes = allTechQuotes.filter(quote => quote.faction === "ply");
    this.slaQuotes = allTechQuotes.filter(quote => quote.faction === "sla");
    this.otherQuotes = allTechQuotes.filter(quote => quote.faction === "o");

    this.wonderQuotes = require('./civ-be-wonder-quotes.json').quotes as Array<WonderQuote>;
  }
}