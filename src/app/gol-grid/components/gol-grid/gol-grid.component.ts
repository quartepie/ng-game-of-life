import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GridStateService } from '../../services/grid-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gol-grid',
  templateUrl: './gol-grid.component.html',
  styleUrls: ['./gol-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GolGridComponent implements OnInit {

  @Input() set colCount(value: number) {
    this.colNumber = value || 1;
    this.stateService.generateNewField(this.colNumber, this.rowNumber);
  }

  @Input() set rowCount(value: number) {
    this.rowNumber = value || 1;
    this.stateService.generateNewField(this.colNumber, this.rowNumber);
  }

  private colNumber = 1;
  private rowNumber = 1;
  inProgress = false;

  fieldScheme$: Observable<boolean[][]> = this.stateService.fieldState$;
  generations$: Observable<number> = this.stateService.generations$;

  constructor(private stateService: GridStateService) { }

  ngOnInit() {
  }

  start() {
    this.inProgress = true;
    this.stateService.startGame();
  }

  pause() {
    this.inProgress = false;
    this.stateService.pauseGame();
  }

  reset() {
    this.stateService.resetField();
  }

  toggleCell(rowIndex: number, colIndex: number) {
    this.stateService.toggleCell(rowIndex, colIndex);
  }
}