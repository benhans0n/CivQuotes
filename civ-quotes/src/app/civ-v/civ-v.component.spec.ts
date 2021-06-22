import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivVComponent } from './civ-v.component';

describe('CivVComponent', () => {
  let component: CivVComponent;
  let fixture: ComponentFixture<CivVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
