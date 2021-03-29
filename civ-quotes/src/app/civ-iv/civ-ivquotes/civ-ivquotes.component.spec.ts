import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivIVQuotesComponent } from './civ-ivquotes.component';

describe('CivIVQuotesComponent', () => {
  let component: CivIVQuotesComponent;
  let fixture: ComponentFixture<CivIVQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivIVQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivIVQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
