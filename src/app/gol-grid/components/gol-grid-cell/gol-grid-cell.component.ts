import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gol-grid-cell',
  templateUrl: './gol-grid-cell.component.html',
  styleUrls: ['./gol-grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GolGridCellComponent implements OnInit {

  @Input() toggled: boolean | number;

  constructor() { }

  ngOnInit() {
  }

}
