import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gol-grid-row',
  templateUrl: './gol-grid-row.component.html',
  styleUrls: ['./gol-grid-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GolGridRowComponent implements OnInit {

  @Input() cells: number[];
  @Input() rowIndex: number;
  @Input() editable: boolean;
  @Output() cellClick = new EventEmitter();
  @Output() drawStart = new EventEmitter();
  @Output() drawEnd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startDraw(cellIndex, value) {
    this.drawStart.emit(value);
    this.cellClick.emit(cellIndex);
  }

  toggleCell(index) {
    if (this.editable) {
      this.cellClick.emit(index);
    }
  }

  endDraw() {
    this.drawEnd.emit();
  }
}
