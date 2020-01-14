import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GridStateService } from '../../../services/grid-state.service';

export const cellSize = {
  width: 23,
  height: 23
};

@Component({
  selector: 'app-canvas-grid',
  templateUrl: './canvas-grid.component.html',
  styleUrls: ['./canvas-grid.component.scss']
})
export class CanvasGridComponent implements OnInit, AfterViewInit {

  @Input() set colCount(value) {
    this.columns = value;
    this.setCanvasSize();
    this.drawGrid();
  }

  @Input() set rowCount(value) {
    this.rows = value;
    this.setCanvasSize();
    this.drawGrid();
  }

  columns = 10;
  rows = 10;

  @ViewChild('canvas') canvasEl: ElementRef;
  canvasContext: CanvasRenderingContext2D;
  isDrawing = false;

  constructor(private stateService: GridStateService) {
  }

  ngOnInit() {
    this.stateService.fieldState$.subscribe(state => this.updateGrid(state));
    this.stateService.drawState$.subscribe(value => this.isDrawing = value);
  }

  ngAfterViewInit(): void {
    this.canvasContext = this.canvasEl.nativeElement.getContext('2d');
    this.canvasContext.fillStyle = 'rgb(0,0,0)';
    this.canvasContext.strokeStyle = 'rgb(0,0,0)';

    this.setCanvasSize();
    this.drawGrid();
  }

  setCanvasSize() {
    this.canvasEl.nativeElement.width = this.columns * cellSize.width;
    this.canvasEl.nativeElement.height = this.rows * cellSize.height;
  }

  drawGrid() {
    const context = this.canvasContext || this.canvasEl.nativeElement.getContext('2d');
    context.strokeRect(0, 0, this.columns * cellSize.width, this.rows * cellSize.height);
    context.beginPath();
    for (let i = 0; i < this.columns; i++) {
      context.moveTo(i * cellSize.width, 0);
      context.lineTo(i * cellSize.width, this.canvasEl.nativeElement.height);
    }
    for (let i = 0; i < this.rows; i++) {
      context.moveTo(0, i * cellSize.height);
      context.lineTo(this.canvasEl.nativeElement.width, i * cellSize.height);
    }
    context.stroke();
    context.closePath();
  }

  updateGrid(grid) {
    const ctx: CanvasRenderingContext2D = this.canvasContext || this.canvasEl.nativeElement.getContext('2d');
    grid.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        if (column) {
          ctx.fillRect(columnIndex * cellSize.width, rowIndex * cellSize.height, cellSize.width, cellSize.height);
        } else {
          ctx.clearRect(columnIndex * cellSize.width, rowIndex * cellSize.height, cellSize.width, cellSize.height);
        }
      });
    });
    this.drawGrid();
  }

  canvasClick(event) {
    const { rowIndex, colIndex } = this.findCellByCoords(event.offsetX, event.offsetY);
    // this.stateService.startDraw(true);
    // this.stateService.toggleCell(rowIndex, colIndex);
    // this.stateService.endDraw();
  }

  startDraw(event) {
    const { rowIndex, colIndex } = this.findCellByCoords(event.offsetX, event.offsetY);
    const cellValue = this.stateService.getStateSnapshot()[rowIndex][colIndex];
    this.stateService.startDraw(!cellValue);
    this.stateService.toggleCell(rowIndex, colIndex);
  }

  endDraw() {
    this.stateService.endDraw();
  }

  onMouseMove({ offsetX, offsetY }) {
    const { rowIndex, colIndex } = this.findCellByCoords(offsetX, offsetY);
    if (this.isDrawing) {
      this.stateService.toggleCell(rowIndex, colIndex);
    }
  }

  private findCellByCoords(cellX, cellY) {
    const colIndex = Math.floor(cellX / cellSize.width);
    const rowIndex = Math.floor(cellY / cellSize.height);
    if (rowIndex <= this.rows && colIndex <= this.columns) {
      return { rowIndex, colIndex };
    } else {
      throw new Error('Cell out of bounds');
    }
  }
}
