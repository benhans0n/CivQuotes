import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaCentauriComponent } from './alpha-centauri.component';

describe('AlphaCentauriComponent', () => {
  let component: AlphaCentauriComponent;
  let fixture: ComponentFixture<AlphaCentauriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlphaCentauriComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaCentauriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
