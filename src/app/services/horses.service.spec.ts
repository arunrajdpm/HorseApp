import { TestBed } from '@angular/core/testing';

import { HorsesService } from './horses.service';

describe('HorsesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorsesService = TestBed.get(HorsesService);
    expect(service).toBeTruthy();
  });
});
