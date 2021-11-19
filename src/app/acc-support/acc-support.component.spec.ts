import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSupportComponent } from './acc-support.component';

describe('AccSupportComponent', () => {
  let component: AccSupportComponent;
  let fixture: ComponentFixture<AccSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
