import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAproveComponent } from './payroll-aprove.component';

describe('PayrollAproveComponent', () => {
  let component: PayrollAproveComponent;
  let fixture: ComponentFixture<PayrollAproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollAproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
