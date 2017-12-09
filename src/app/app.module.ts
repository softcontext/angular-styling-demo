import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SongComponent } from './component/song/song.component';
import { SongTrack1Component } from './component/song-track1/song-track1.component';
import { SongTrack2Component } from './component/song-track2/song-track2.component';
import { SongTrack3Component } from './component/song-track3/song-track3.component';
import { SongTrack4Component } from './component/song-track4/song-track4.component';
import { TrackImageComponent } from './component/track-image/track-image.component';
import { TrackTitleComponent } from './component/track-title/track-title.component';
import { TrackArtistComponent } from './component/track-artist/track-artist.component';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongTrack1Component,
    SongTrack2Component,
    SongTrack3Component,
    SongTrack4Component,
    TrackImageComponent,
    TrackTitleComponent,
    TrackArtistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
