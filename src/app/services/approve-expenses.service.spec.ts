import { TestBed } from '@angular/core/testing';

import { ApproveExpensesService } from './approve-expenses.service';

describe('ApproveExpensesService', () => {
  let service: ApproveExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
