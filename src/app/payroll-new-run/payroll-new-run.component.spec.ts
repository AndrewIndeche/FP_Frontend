import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollNewRunComponent } from './payroll-new-run.component';

describe('PayrollNewRunComponent', () => {
  let component: PayrollNewRunComponent;
  let fixture: ComponentFixture<PayrollNewRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollNewRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollNewRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
