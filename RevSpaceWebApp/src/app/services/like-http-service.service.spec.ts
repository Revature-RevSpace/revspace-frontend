import { TestBed } from '@angular/core/testing';

import { LikeHttpServiceService } from './like-http-service.service';

describe('LikeHttpServiceService', () => {
  let service: LikeHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
