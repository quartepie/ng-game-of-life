import { TestBed } from '@angular/core/testing';

import { GridStateService } from './grid-state.service';

fdescribe('GridStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    expect(service).toBeTruthy();
  });

  it('should generate field with set width and height', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    const width = 10;
    const height = 20;
    service.generateNewField(width, height);
    service.fieldState$.subscribe(data => {
      expect(data.length).toEqual(height);
      data.forEach(row => expect(row.length).toEqual(width));
    });
  });

  it('should toggle cell state', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    service.generateNewField(1, 1);
    service.toggleCell(0, 0);
    service.fieldState$.subscribe(state => {
      expect(state).toEqual([[true]]);
    });
  });

  it('should reset field state', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    const spy = spyOn(service, 'resetField');
    service.resetField();
    expect(spy).toHaveBeenCalled();
  });

  it('should properly count neighbors', () => {
    const service: GridStateService = TestBed.get(GridStateService);
    service.generateNewField(2, 2);
    service.toggleCell(1, 1);
    service.toggleCell(0, 1);
    service.getAliveNeighbors(1, 1);
  });
});
