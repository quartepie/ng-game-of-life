import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GolGridModule } from './gol-grid/gol-grid.module';
import { FormsModule } from '@angular/forms';
import { GolGridCanvasModule } from './gol-grid-canvas/gol-grid-canvas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GolGridModule,
    GolGridCanvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
