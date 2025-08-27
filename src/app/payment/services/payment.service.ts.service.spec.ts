import { TestBed } from '@angular/core/testing';

import { PaymentServiceTsService } from './payment.service';

describe('PaymentServiceTsService', () => {
  let service: PaymentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
