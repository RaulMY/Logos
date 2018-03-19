import { TestBed, inject } from '@angular/core/testing';

import { IdeasService } from './ideas.service';

describe('IdeasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeasService]
    });
  });

  it('should be created', inject([IdeasService], (service: IdeasService) => {
    expect(service).toBeTruthy();
  }));
});
