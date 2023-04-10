import { TestBed } from '@angular/core/testing';

import { ActualitiesService } from './actualities.service';

describe('ActualitiesService', () => {
  let service: ActualitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
