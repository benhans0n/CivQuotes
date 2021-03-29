import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivBeComponent } from './civ-be.component';

describe('CivBeComponent', () => {
  let component: CivBeComponent;
  let fixture: ComponentFixture<CivBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
