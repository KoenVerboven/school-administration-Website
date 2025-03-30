import { TestBed } from '@angular/core/testing';

import { ExamResultsService } from './examresults.service';

describe('ExamResultsService', () => {
  let service: ExamResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
