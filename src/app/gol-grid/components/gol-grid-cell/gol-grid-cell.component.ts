import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gol-grid-cell',
  templateUrl: './gol-grid-cell.component.html',
  styleUrls: ['./gol-grid-cell.component.scss']
})
export class GolGridCellComponent implements OnInit {

  @Input() toggled: boolean | number;
  @Output() cellClick = new EventEmitter();
  @HostListener('mousedown')
  onCellClick() {
    this.cellClick.emit();
  }

  @HostListener('mouseenter', ['$event'])
  onMouseOver(event) {
    if (event.buttons || event.which) {
      this.cellClick.emit();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
