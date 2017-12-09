import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-image',
  templateUrl: './track-image.component.html',
  styleUrls: ['./track-image.component.css']
})
export class TrackImageComponent {
  defaultImage = "https://cdn4.iconfinder.com/data/icons/sound-and-audio/32/black_7_music_node-512.png";
  coverImage;

  constructor() {
    this.changeImage(this.defaultImage);
  }

  @Input()
  set image(url) {
    this.changeImage(url);
  }

  changeImage(url) {
    let image = url || this.defaultImage;
    this.coverImage = { 'background-image': `url('${image}')` };
  }
}
