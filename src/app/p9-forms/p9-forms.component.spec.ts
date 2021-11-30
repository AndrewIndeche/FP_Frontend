import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P9FormsComponent } from './p9-forms.component';

describe('P9FormsComponent', () => {
  let component: P9FormsComponent;
  let fixture: ComponentFixture<P9FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P9FormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P9FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
