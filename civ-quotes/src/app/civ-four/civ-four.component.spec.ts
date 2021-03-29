import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivFourComponent } from './civ-four.component';

describe('CivFourComponent', () => {
  let component: CivFourComponent;
  let fixture: ComponentFixture<CivFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
