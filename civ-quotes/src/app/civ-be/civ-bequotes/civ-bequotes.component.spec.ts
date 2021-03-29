import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivBEQuotesComponent } from './civ-bequotes.component';

describe('CivBEQuotesComponent', () => {
  let component: CivBEQuotesComponent;
  let fixture: ComponentFixture<CivBEQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivBEQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivBEQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
