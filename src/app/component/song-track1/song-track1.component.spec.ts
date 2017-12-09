import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTrack1Component } from './song-track1.component';

describe('SongTrack1Component', () => {
  let component: SongTrack1Component;
  let fixture: ComponentFixture<SongTrack1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTrack1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
