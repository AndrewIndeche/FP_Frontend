import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoverviewComponent } from './payoverview.component';

describe('PayoverviewComponent', () => {
  let component: PayoverviewComponent;
  let fixture: ComponentFixture<PayoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
