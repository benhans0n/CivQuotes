import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivVQuotesComponent } from './civ-vquotes.component';

describe('CivVQuotesComponent', () => {
  let component: CivVQuotesComponent;
  let fixture: ComponentFixture<CivVQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivVQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivVQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
