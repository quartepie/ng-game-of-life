import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasGridComponent } from './components/canvas-grid/canvas-grid.component';

@NgModule({
  declarations: [CanvasGridComponent],
  imports: [
    CommonModule
  ],
  exports: [CanvasGridComponent]
})
export class GolGridCanvasModule { }
