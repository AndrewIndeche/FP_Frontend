import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollReviewComponent } from './payroll-review.component';

describe('PayrollReviewComponent', () => {
  let component: PayrollReviewComponent;
  let fixture: ComponentFixture<PayrollReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
