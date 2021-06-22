import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivViComponent } from './civ-vi.component';

describe('CivViComponent', () => {
  let component: CivViComponent;
  let fixture: ComponentFixture<CivViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivViComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
