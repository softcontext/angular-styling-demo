import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackArtistComponent } from './track-artist.component';

describe('TrackArtistComponent', () => {
  let component: TrackArtistComponent;
  let fixture: ComponentFixture<TrackArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
