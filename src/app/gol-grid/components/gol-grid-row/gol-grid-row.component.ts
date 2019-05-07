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
  @Output() cellClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cellClicked(cellIndex: number) {
    this.cellClick.emit(cellIndex);
  }
}
