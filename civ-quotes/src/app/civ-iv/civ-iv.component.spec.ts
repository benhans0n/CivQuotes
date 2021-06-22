import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivIvComponent } from './civ-iv.component';

describe('CivIvComponent', () => {
  let component: CivIvComponent;
  let fixture: ComponentFixture<CivIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
