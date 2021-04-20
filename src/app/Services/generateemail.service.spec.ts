import { TestBed } from '@angular/core/testing';

import { GenerateemailService } from './generateemail.service';

describe('GenerateemailService', () => {
  let service: GenerateemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
