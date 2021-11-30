import { TestBed } from '@angular/core/testing';

import { RunpayService } from './runpay.service';

describe('RunpayService', () => {
  let service: RunpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
