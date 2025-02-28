import { TestBed } from '@angular/core/testing';

import { StudyplanService } from './studyplan.service';

describe('StudyPlanService', () => {
  let service: StudyplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudyplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
