import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTrack2Component } from './song-track2.component';

describe('SongTrack2Component', () => {
  let component: SongTrack2Component;
  let fixture: ComponentFixture<SongTrack2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTrack2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrack2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
