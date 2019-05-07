import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolGridCellComponent } from './gol-grid-cell.component';

describe('GolGridCellComponent', () => {
  let component: GolGridCellComponent;
  let fixture: ComponentFixture<GolGridCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolGridCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolGridCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
