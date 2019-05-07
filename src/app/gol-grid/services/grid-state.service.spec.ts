import { TestBed } from '@angular/core/testing';

import { GridStateService } from './grid-state.service';

describe('GridStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    expect(service).toBeTruthy();
  });
});
