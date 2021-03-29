import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACQuotesComponent } from './acquotes.component';

describe('ACQuotesComponent', () => {
  let component: ACQuotesComponent;
  let fixture: ComponentFixture<ACQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
