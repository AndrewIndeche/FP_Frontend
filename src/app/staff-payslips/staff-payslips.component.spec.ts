import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPayslipsComponent } from './staff-payslips.component';

describe('StaffPayslipsComponent', () => {
  let component: StaffPayslipsComponent;
  let fixture: ComponentFixture<StaffPayslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffPayslipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffPayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
