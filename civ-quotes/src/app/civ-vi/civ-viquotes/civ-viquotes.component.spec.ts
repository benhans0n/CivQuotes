import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivVIQuotesComponent } from './civ-viquotes.component';

describe('CivVIQuotesComponent', () => {
  let component: CivVIQuotesComponent;
  let fixture: ComponentFixture<CivVIQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivVIQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivVIQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
