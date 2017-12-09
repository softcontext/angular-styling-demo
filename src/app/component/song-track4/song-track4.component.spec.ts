import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTrack4Component } from './song-track4.component';

describe('SongTrack4Component', () => {
  let component: SongTrack4Component;
  let fixture: ComponentFixture<SongTrack4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTrack4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTrack4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
