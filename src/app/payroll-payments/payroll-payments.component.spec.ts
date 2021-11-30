import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollPaymentsComponent } from './payroll-payments.component';

describe('PayrollPaymentsComponent', () => {
  let component: PayrollPaymentsComponent;
  let fixture: ComponentFixture<PayrollPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
