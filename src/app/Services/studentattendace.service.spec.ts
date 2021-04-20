import { TestBed } from '@angular/core/testing';

import { StudentattendaceService } from './studentattendace.service';

describe('StudentattendaceService', () => {
  let service: StudentattendaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentattendaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
