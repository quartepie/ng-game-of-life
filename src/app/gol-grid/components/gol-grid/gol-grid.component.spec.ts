import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolGridComponent } from './gol-grid.component';

describe('GolGridComponent', () => {
  let component: GolGridComponent;
  let fixture: ComponentFixture<GolGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
