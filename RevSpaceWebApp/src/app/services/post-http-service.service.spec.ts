import { TestBed } from '@angular/core/testing';

import { PostHttpServiceService } from './post-http-service.service';

describe('PostHttpServiceService', () => {
  let service: PostHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
