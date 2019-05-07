import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolGridComponent } from './components/gol-grid/gol-grid.component';
import { GolGridRowComponent } from './components/gol-grid-row/gol-grid-row.component';
import { GolGridCellComponent } from './components/gol-grid-cell/gol-grid-cell.component';

@NgModule({
  declarations: [GolGridComponent, GolGridRowComponent, GolGridCellComponent],
  imports: [
    CommonModule
  ],
  exports: [GolGridComponent, GolGridRowComponent, GolGridCellComponent]
})
export class GolGridModule { }
