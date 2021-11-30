import { TestBed } from '@angular/core/testing';

import { StaffProcessesService } from './staff-processes.service';

describe('StaffProcessesService', () => {
  let service: StaffProcessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffProcessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
