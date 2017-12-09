import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackImageComponent } from './track-image.component';

describe('TrackImageComponent', () => {
  let component: TrackImageComponent;
  let fixture: ComponentFixture<TrackImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
