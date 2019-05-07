import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolGridRowComponent } from './gol-grid-row.component';

describe('GolGridRowComponent', () => {
  let component: GolGridRowComponent;
  let fixture: ComponentFixture<GolGridRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolGridRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolGridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
