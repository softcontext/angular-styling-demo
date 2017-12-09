import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'song-track3',
  host: {
    '[class.selected]': 'selected',
    '(click)': 'toggleSelected($event)',
  },
  templateUrl: './song-track3.component.html',
  styleUrls: ['./song-track3.component.css']
})
export class SongTrack3Component {
  _defaultImage = "https://cdn4.iconfinder.com/data/icons/sound-and-audio/32/black_7_music_node-512.png";
  _coverImage;
  selected: boolean = false;

  constructor() {
    this.changeImage(this._defaultImage);
  }

  @Input() track = "Undefined";
  @Input() artist = "Undefined";
  @Input() set image(url) {
    this.changeImage(url);
  }

  private changeImage(url) {
    let image = url || this._defaultImage;
    this._coverImage = { 'background-image': `url('${image}')` };
  }

  toggleSelected(e) {
    this.selected = !this.selected;
  }
}
