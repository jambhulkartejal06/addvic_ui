import { TestBed } from '@angular/core/testing';

import { DigitalMarketingCourseService } from './digital-marketing-course.service';

describe('DigitalMarketingCourseService', () => {
  let service: DigitalMarketingCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalMarketingCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
