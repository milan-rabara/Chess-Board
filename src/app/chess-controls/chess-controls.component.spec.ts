import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessControlsComponent } from './chess-controls.component';

describe('ChessControlsComponent', () => {
  let component: ChessControlsComponent;
  let fixture: ComponentFixture<ChessControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChessControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
