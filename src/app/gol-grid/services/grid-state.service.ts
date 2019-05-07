import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GridStateService {

  fieldState: BehaviorSubject<boolean[][]> = new BehaviorSubject([[]]);
  fieldState$: Observable<boolean[][]> = this.fieldState.asObservable();
  generations$ = new BehaviorSubject(0);
  private stopper = new Subject();
  private config = {
    rows: 1,
    columns: 1
  };

  constructor() { }

  generateNewField(colCount: number, rowCount: number) {
    const newField = this.generateArray(rowCount).map(() => this.generateArray(colCount).map(() => false));
    this.config = {
      rows: rowCount,
      columns: colCount
    };
    this.fieldState.next(newField);
    this.generations$.next(0);
  }

  private generateArray(length: number) {
    return Array.apply(null, Array(length));
  }

  toggleCell(rowIndex: number, colIndex: number) {
    const currentState = this.fieldState.value;
    if (currentState[rowIndex]) {
      currentState[rowIndex][colIndex] = !currentState[rowIndex][colIndex];
      this.fieldState.next(currentState);
    }
  }

  startGame() {
    interval(100)
      .pipe(tap(() => this.generations$.next(this.generations$.value + 1)), takeUntil(this.stopper))
      .subscribe(() => this.evolveGrid());
  }

  pauseGame() {
    this.stopper.next();
  }

  resetField() {
    this.generateNewField(this.config.columns, this.config.rows);
  }

  evolveGrid() {
    const state = this.fieldState.value;
    this.fieldState.next(state.map((row, rowIndex) => {
      return row.map((cell, colIndex) => {
        const alive = this.getAliveNeighbors(rowIndex, colIndex);
        if (cell) {
          return alive === 2 || alive === 3;
        } else {
          return alive === 3;
        }
      });
    }));
  }

  getAliveNeighbors(rowIndex: number, colIndex: number) {
    const state = this.fieldState.value;
    const neighborDirections = [
      [-1, -1], [0, -1], [1, -1],
      [-1, 0], [1, 0],
      [-1, 1], [0, 1], [1, 1]
    ];
    const neighbors = neighborDirections
      .map(([dX, dY]) => ([dX + colIndex, dY + rowIndex]))
      .map(([x, y]) => (state[y] || [])[x])
      .filter(item => item);

    return neighbors.length || 0;
  }

}
