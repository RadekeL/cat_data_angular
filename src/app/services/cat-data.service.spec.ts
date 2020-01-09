import { TestBed } from '@angular/core/testing';

import { CatDataService } from './cat-data.service';

describe('CatDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatDataService = TestBed.get(CatDataService);
    expect(service).toBeTruthy();
  });
});
