import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GolGridModule } from './gol-grid/gol-grid.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GolGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
