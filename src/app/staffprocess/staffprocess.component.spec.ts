import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffprocessComponent } from './staffprocess.component';

describe('StaffprocessComponent', () => {
  let component: StaffprocessComponent;
  let fixture: ComponentFixture<StaffprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
