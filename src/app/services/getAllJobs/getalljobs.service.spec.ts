import { TestBed } from '@angular/core/testing';

import { GetalljobsService } from './getalljobs.service';

describe('GetalljobsService', () => {
  let service: GetalljobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetalljobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
