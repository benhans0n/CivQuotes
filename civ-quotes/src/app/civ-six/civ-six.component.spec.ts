import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivSixComponent } from './civ-six.component';

describe('CivSixComponent', () => {
  let component: CivSixComponent;
  let fixture: ComponentFixture<CivSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
