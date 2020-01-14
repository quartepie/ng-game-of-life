import { Component } from '@angular/core';
import { GridStateService } from './services/grid-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns = 10;
  rows = 10;
  generations$ = this.stateService.generations$;

  get inProgress() {
    return this.stateService.inProgress;
  }

  constructor(private stateService: GridStateService) {
  }

  start() {
    this.stateService.startGame();
  }

  pause() {
    this.stateService.pauseGame();
  }

  reset() {
    this.stateService.resetField();
  }
}
