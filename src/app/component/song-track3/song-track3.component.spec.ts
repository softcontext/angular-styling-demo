import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTrack3Component } from './song-track3.component';

describe('SongTrack3Component', () => {
  let component: SongTrack3Component;
  let fixture: ComponentFixture<SongTrack3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTrack3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrack3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
