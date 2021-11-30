import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsEComponent } from './payments-e.component';

describe('PaymentsEComponent', () => {
  let component: PaymentsEComponent;
  let fixture: ComponentFixture<PaymentsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
