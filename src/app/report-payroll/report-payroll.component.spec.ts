import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPayrollComponent } from './report-payroll.component';

describe('ReportPayrollComponent', () => {
  let component: ReportPayrollComponent;
  let fixture: ComponentFixture<ReportPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
