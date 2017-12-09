import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTitleComponent } from './track-title.component';

describe('TrackTitleComponent', () => {
  let component: TrackTitleComponent;
  let fixture: ComponentFixture<TrackTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
