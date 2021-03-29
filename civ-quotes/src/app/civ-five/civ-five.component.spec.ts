import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivFiveComponent } from './civ-five.component';

describe('CivFiveComponent', () => {
  let component: CivFiveComponent;
  let fixture: ComponentFixture<CivFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
